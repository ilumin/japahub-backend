import { NatsWrapper } from "./nats-wrapper";

export const startNats = async (natsWrapper: NatsWrapper) => {
  try {
    await natsWrapper.connect("japa", "nats://nats-srv:4222");
    if (natsWrapper.client.isClosed()) {
      console.log("NATS connection closed!");
      process.exit();
    }
    process.on("SIGINT", async () => await natsWrapper.client.drain());
    process.on("SIGTERM", async () => await natsWrapper.client.drain());
  } catch (err) {
    console.error(err);
  }
};
