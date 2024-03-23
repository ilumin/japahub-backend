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
      unique: true,
    },
    gender: String,
    bio: String,
    imageUrl: String,
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
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    collection: "user",
  }
);

const UserModel: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
