import { Result, ValueObject, Guard } from "@japahubs/shared";

interface UserBioProps {
  bio: string;
}

export class UserBio extends ValueObject<UserBioProps> {
  public static maxLength: number = 150;

  get value(): string {
    return this.props.bio;
  }

  private constructor(props: UserBioProps) {
    super(props);
  }

  public static create(props: UserBioProps): Result<UserBio> {
    const bioResult = Guard.againstNullOrUndefined(props.bio, "bio");
    if (bioResult.isFailure) {
      return Result.fail<UserBio>(bioResult.getErrorValue());
    }

    const maxLengthResult = Guard.againstAtMost(this.maxLength, props.bio);
    if (maxLengthResult.isFailure) {
      return Result.fail<UserBio>(maxLengthResult.getErrorValue());
    }

    return Result.ok<UserBio>(new UserBio(props));
  }
}
