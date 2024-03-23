import { UniqueEntityID } from "@japahubs/shared";
import { Subjects } from "../subjects";
import { UserEvent } from "./user-event";

interface UserProps {
  id: UniqueEntityID;
  firstName: string;
  lastName: string;
  email: string;
}

export class UserCreatedEvent extends UserEvent {
  public subject: Subjects.UserCreated;

  constructor(user: UserProps) {
    super(user, Subjects.UserCreated);
  }
}
