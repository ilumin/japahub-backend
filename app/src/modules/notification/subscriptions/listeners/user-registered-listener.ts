import {
  Listener,
  Streams,
  Subjects,
  UserRegisteredEvent,
} from "../../../../shared/nats";
import { JsMsg } from "nats";
import { queueGroupName } from "../queue-group-name";

export class UserRegisteredListener extends Listener<UserRegisteredEvent> {
  stream: Streams.User = Streams.User;
  subject: Subjects.UserRegistered = Subjects.UserRegistered;
  queueGroupName: string = queueGroupName;

  async onMessage(data: UserRegisteredEvent["data"], msg: JsMsg) {
    //get data out of event
    //const { userId, firstname, lastName, email, password } = data;
    console.log({ listenner: "UserRegisteredListener", data });

    //send email

    msg.ack();
  }
}
