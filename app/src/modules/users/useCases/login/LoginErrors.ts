import { UseCaseError, Result } from "@japahubs/shared";

export namespace LoginUseCaseErrors {
  export class EmailDoesntExistError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `Account does not exist`,
      } as UseCaseError);
    }
  }

  export class IncorrectPasswordError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `Incorrect password`,
      } as UseCaseError);
    }
  }
}
