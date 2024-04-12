import mongoose, { Schema, Document, Model } from "mongoose";
import { IUser } from "../IModels";

const UserSchema = new Schema<IUser>(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: String,
    phone: {
      type: String,
    },
    gender: String,
    bio: String,
    avatar: String,
    country: String,
    language: {
      type: String,
      required: true,
    },
    dateofbirth: Date,
    links: [String],
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN", "CREATOR"],
      default: "USER",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

const UserModel: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
