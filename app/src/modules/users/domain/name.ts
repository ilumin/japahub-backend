import { Result, Guard, ValueObject } from "@japahubs/shared";

interface NameProps {
  value: string;
}

export class Name extends ValueObject<NameProps> {
  public static maxLength: number = 30;
  public static minLength: number = 2;

  get value(): string {
    return this.props.value;
  }

  private constructor(props: NameProps) {
    super(props);
  }

  public static create(props: NameProps): Result<Name> {
    const nameResult = Guard.againstNullOrUndefined(props.value, "name");
    if (nameResult.isFailure) {
      return Result.fail<Name>(nameResult.getErrorValue());
    }

    const minLengthResult = Guard.againstAtLeast(this.minLength, props.value);
    if (minLengthResult.isFailure) {
      return Result.fail<Name>(minLengthResult.getErrorValue());
    }

    const maxLengthResult = Guard.againstAtMost(this.maxLength, props.value);
    if (maxLengthResult.isFailure) {
      return Result.fail<Name>(minLengthResult.getErrorValue());
    }

    return Result.ok<Name>(new Name(props));
  }
}
