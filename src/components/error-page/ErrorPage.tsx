import React from "react";
import { useStyletron } from "baseui";
import { styles as s } from "./styles";
import { BUTTON_KIND, Button } from "../button";
import { ArrowUpIcon } from "../icons";

export type ErrorPageProps = {
  errorCode?: number;
  errorDescription?: string;
  redirectPath?: string;
  redirectTitle?: string;
};

const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode = 404,
  errorDescription = "Something went wrong, page not found",
  redirectPath,
  redirectTitle = "Home",
}) => {
  const [css] = useStyletron();

  return (
    <div className={css(s.containerStyles)}>
      <div>
        <Button kind={BUTTON_KIND.tertiary} className={css(s.btnStyles)}>
          <ArrowUpIcon className={css(s.iconStyles)} />
          <p>{redirectTitle}</p>
        </Button>
      </div>
      <div>
        <h1 className={css(s.errorCodeStyles)}>{errorCode}</h1>
      </div>
    </div>
  );
};

export default ErrorPage;
