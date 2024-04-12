//import { sendEmail } from "../useCases/sendEmail";
//import { UserSubscription } from "./userSubscriptions";
import { startNats } from "../../../shared/infra/broker/nats/startNats";

import { UserCreatedListener } from "./listeners/user-created-listener";
import { UserRegisteredListener } from "./listeners/user-registered-listener";
import { UserListener } from "./listeners/user-listener";

async function setupListeners() {
  const client = await startNats("notification module");

  //console.log((await natsWrapper.client.request("$SYS.REQ.USER.INFO")).json());

  //await new UserCreatedListener(client).listen();
  //await new UserRegisteredListener(client).listen();
  await new UserListener(client).listen();
}

setupListeners();

//new UserSubscription(sendEmail);
