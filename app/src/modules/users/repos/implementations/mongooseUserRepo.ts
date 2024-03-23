import { IUserRepo } from "../userRepo";
import { UserName } from "../../domain/userName";
import { User } from "../../domain/user";
import { UserMap } from "../../mappers/userMap";
import { Model, Document } from "mongoose";
import { IUser } from "../../../../shared/infra/persistence/mongoose/IModels";
import { UserEmail } from "../../domain/userEmail";
import { dispatchEventsCallback } from "../../domain/events/dispatchEventsCallback";

export class MongooseUserRepo implements IUserRepo {
  private userModel: Model<IUser>;

  constructor(model: Model<IUser>) {
    this.userModel = model;
  }

  async exists(email: UserEmail): Promise<boolean> {
    const user = await this.userModel.findOne({
      email: email.value,
    });
    return !!user;
  }

  async getUserByUserId(userId: string): Promise<User> {
    const user = await this.userModel.findOne({ base_user_id: userId });
    if (!user) throw Error("User not found.");
    return UserMap.toDomain(user);
  }

  async getUserByUserName(userName: UserName | string): Promise<User> {
    const username =
      userName instanceof UserName
        ? (userName as UserName).value
        : (userName as string);
    const user = await this.userModel.findOne({ username });
    if (!user) throw new Error("User not found.");
    return UserMap.toDomain(user);
  }

  async getUserByUserEmail(userEmail: UserEmail | string): Promise<User> {
    const email =
      userEmail instanceof UserName
        ? (userEmail as UserName).value
        : (userEmail as string);
    const user = await this.userModel.findOne({ email });
    if (!user) throw new Error("User not found.");
    return UserMap.toDomain(user);
  }

  async save(user: User): Promise<void> {
    const exists = await this.exists(user.email);

    if (!exists) {
      const rawMongooseUser = await UserMap.toPersistence(user);
      // Create a new instance of the UserModel
      const newUser = new this.userModel(rawMongooseUser);

      // Save the new user document
      await newUser.save();

      dispatchEventsCallback(newUser._id);
    }

    return;
  }

  async delete(userId: string): Promise<void> {
    const result = await this.userModel.deleteOne({ _id: userId });

    if (result.deletedCount === 0) {
      throw new Error("User not found or could not be deleted.");
    }

    return;
  }
}
