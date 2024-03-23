import {
  Listener,
  Streams,
  Subjects,
  UserCreatedEvent,
} from "../../../../shared/nats";
import { JsMsg, NatsConnection } from "nats";
import { queueGroupName } from "../queue-group-name";

export class UserCreatedListener extends Listener<UserCreatedEvent> {
  stream: Streams.User = Streams.User;
  subject: Subjects.UserCreated = Subjects.UserCreated;
  queueGroupName: string = queueGroupName;

  async onMessage(data: UserCreatedEvent["data"], msg: JsMsg) {
    //get data out of event
    //const { userId, firstname, lastName, email, password } = data;
    console.log(data);

    //send email

    msg.ack();
  }
}
