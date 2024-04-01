//import { sendEmail } from "../useCases/sendEmail";
//import { UserSubscription } from "./userSubscriptions";
import { startNats } from "../../../shared/infra/broker/nats/startNats";

import { UserCreatedListener } from "./listeners/user-created-listener";
import { UserRegisteredListener } from "./listeners/user-registered-listener";
import { NatsWrapper } from "../../../shared/infra/broker/nats/nats-wrapper";

const natsWrapper = new NatsWrapper("notification module");

async function setupListeners() {
  await startNats(natsWrapper);

  console.log((await natsWrapper.client.request("$SYS.REQ.USER.INFO")).json());

  await new UserCreatedListener(natsWrapper.client).listen();
  await new UserRegisteredListener(natsWrapper.client).listen();
}

setupListeners();

//new UserSubscription(sendEmail);
