import { startNats } from "../../../../shared/infra/broker/nats/startNats";
import { NatsWrapper } from "../../../../shared/infra/broker/nats/nats-wrapper";
import { UserCreatedPublisher } from "./publishers/user-created-publisher";
import { UserRegisteredPublisher } from "./publishers/user-registered-publisher";

const natsWrapper = new NatsWrapper("users module");

let userCreatedPublisher: UserCreatedPublisher;
let userRegisteredPublisher: UserRegisteredPublisher;

async function setupPublishers() {
  await startNats(natsWrapper);

  userCreatedPublisher = new UserCreatedPublisher(natsWrapper.client);
  userRegisteredPublisher = new UserRegisteredPublisher(natsWrapper.client);
}

setupPublishers();

export { userCreatedPublisher, userRegisteredPublisher };
