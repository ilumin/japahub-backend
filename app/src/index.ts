import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

import "./modules/users/services/redis/redisConnection";
import "./shared/infra/persistence/mongoose/config";
import "./modules/notification/subscriptions";
import "./app";

// const start = async () => {
//   try {
//     // connect to db, redis and nats before starting express server
//   } catch (err) {
//     // handle error
//   }
// };

// start();
