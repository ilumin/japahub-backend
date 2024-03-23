import { GetUserByEmailDTO } from "./GetUserByEmailDTO";
import { GetUserByEmailErrors } from "./GetUserByEmailErrors";
import { UserEmail } from "../../domain/userEmail";
import { IUserRepo } from "../../repos/userRepo";
import { User } from "../../domain/user";
import {
  left,
  Result,
  Either,
  right,
  AppError,
  UseCase,
} from "@japahubs/shared";

type Response = Either<AppError.UnexpectedError, Result<User>>;

export class GetUserByEmail
  implements UseCase<GetUserByEmailDTO, Promise<Response>>
{
  private userRepo: IUserRepo;

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo;
  }

  public async execute(request: GetUserByEmailDTO): Promise<Response> {
    try {
      const emailOrError = UserEmail.create(request.email);

      if (emailOrError.isFailure) {
        return left(
          Result.fail<any>(emailOrError.getErrorValue().toString())
        ) as Response;
      }

      const email: UserEmail = emailOrError.getValue();

      const user = await this.userRepo.getUserByUserEmail(email);
      const userFound = !!user === true;

      if (!userFound) {
        return left(
          new GetUserByEmailErrors.UserNotFoundError(email.value)
        ) as Response;
      }

      return right(Result.ok<User>(user));
    } catch (err) {
      return left(new AppError.UnexpectedError(err));
    }
  }
}
