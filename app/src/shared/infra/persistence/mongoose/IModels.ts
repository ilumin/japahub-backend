import { Document, ObjectId } from "mongoose";

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  username?: string;
  phone?: string;
  gender?: string;
  bio?: string;
  imageUrl?: string;
  country?: string;
  language: string;
  dateofbirth?: Date;
  links: string[];
  password: string;
  role: "USER" | "ADMIN" | "CREATOR";
  created_at: Date;
  updated_at: Date;
}
