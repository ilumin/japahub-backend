import { IDomainEvent, UniqueEntityID } from "@japahubs/shared";
import { Streams } from "../streams";

interface UserProps {
  id: UniqueEntityID;
  firstName: string;
  lastName: string;
  email: string;
}

export class UserEvent implements IDomainEvent {
  public stream: Streams.User;
  public subject: string;
  public dateTimeOccurred: Date;
  public user: UserProps;
  public data: any;

  constructor(user: UserProps, subject: string) {
    this.dateTimeOccurred = new Date();
    this.user = user;
    this.subject = subject;

    this.data = {
      type: this.subject,
      timestamp: this.dateTimeOccurred.toISOString(),
      data: {
        userId: this.user.id.toString(),
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
      },
    };
  }

  getAggregateId(): UniqueEntityID {
    return this.user.id;
  }

  //   raw(): any {
  //     return {
  //       type: this.subject,
  //       timestamp: this.dateTimeOccurred.toISOString(),
  //       data: {
  //         userId: this.user.id.toString(),
  //         firstName: this.user.firstName,
  //         lastName: this.user.lastName,
  //         email: this.user.email,
  //       },
  //     };
  //   }
}
