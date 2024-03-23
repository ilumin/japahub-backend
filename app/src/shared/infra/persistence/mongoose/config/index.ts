import mongoose, { ConnectOptions } from "mongoose";
import { config } from "../../../../../config";

const { mongoUrl } = config;

console.log(`[DB]: Connecting to database...`);

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("[DB]: MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("[DB]: MongoDB connection error", err);
  });

export default mongoose.connection;
