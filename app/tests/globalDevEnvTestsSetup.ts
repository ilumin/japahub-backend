import dotenv from "dotenv";
import path from "path";

import { prepareDev } from "../prepareDev";

export default async (): Promise<void> => {
  prepareDev();
  const nodeEnv = process.env.NODE_ENV || "development";

  const envPath = path.join(__dirname, `../.env`);

  console.log("Reading env file at", envPath);
  dotenv.config({ path: envPath });
};
