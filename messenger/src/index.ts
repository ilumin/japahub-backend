import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { testRouter } from "./routes/test-route";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

dotenv.config();

const connectionString = process.env.MONGO_URL || "";
const app = express();
app.use(json());

app.use(testRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect(connectionString);

    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
