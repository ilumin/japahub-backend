//import { PrismaUserRepo } from "./implementations/prismaUserRepo";
import { MongooseUserRepo } from "./implementations/mongooseUserRepo";
import UserModel from "../../../shared/infra/persistence/mongoose/models/User";

const userRepo = new MongooseUserRepo(UserModel);

//const userRepo = new PrismaUserRepo();

export { userRepo };
