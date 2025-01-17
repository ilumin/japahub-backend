import { Result, Guard, ValueObject } from "@japahubs/shared";

interface LanguageProps {
  value: string;
}

export class Language extends ValueObject<LanguageProps> {
  get value(): string {
    return this.props.value;
  }

  private constructor(props: LanguageProps) {
    super(props);
  }

  public static create(props: LanguageProps): Result<Language> {
    const nullGuard = Guard.againstNullOrUndefined(props.value, "language");

    if (nullGuard.isFailure) {
      return Result.fail<Language>(nullGuard.getErrorValue());
    }

    return Result.ok<Language>(new Language(props));
  }
}
