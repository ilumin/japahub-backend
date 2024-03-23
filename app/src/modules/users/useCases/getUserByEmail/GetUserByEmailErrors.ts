import { UseCaseError, Result } from "@japahubs/shared";

export namespace GetUserByEmailErrors {
  export class UserNotFoundError extends Result<UseCaseError> {
    constructor(email: string) {
      super(false, {
        message: `No user matching the email ${email} was found`,
      } as UseCaseError);
    }
  }
}
