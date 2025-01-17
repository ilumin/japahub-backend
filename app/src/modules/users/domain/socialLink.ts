import { Result, Guard, ValueObject } from "@japahubs/shared";
import { TextUtils } from "../../../shared/utils/TextUtils";

interface SocialLinkProps {
  url: string;
}

export class SocialLink extends ValueObject<SocialLinkProps> {
  get url(): string {
    return this.props.url;
  }

  private constructor(props: SocialLinkProps) {
    super(props);
  }

  public static create(props: SocialLinkProps): Result<SocialLink> {
    const nullGuard = Guard.againstNullOrUndefined(props.url, "url");

    if (nullGuard.isFailure) {
      return Result.fail<SocialLink>(nullGuard.getErrorValue());
    }
    if (!TextUtils.validateWebURL(props.url)) {
      return Result.fail<SocialLink>("Invalid URL format.");
    }

    return Result.ok<SocialLink>(new SocialLink(props));
  }
}
