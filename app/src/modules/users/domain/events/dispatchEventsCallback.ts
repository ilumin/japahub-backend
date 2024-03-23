import { UniqueEntityID } from "@japahubs/shared";
import { DomainEvents } from "./DomainEvents";

export const dispatchEventsCallback = (primaryKeyField: string) => {
  const aggregateId = new UniqueEntityID(primaryKeyField);
  DomainEvents.dispatchEventsForAggregate(aggregateId);
};
