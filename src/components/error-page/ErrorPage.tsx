import React from "react";
import { useStyletron } from "baseui";
import { errorCodeStyles, errorPageStyles } from "./styles";
import { BUTTON_KIND, Button } from "../button";

export type ErrorPageProps = {
  errorCode?: number;
  errorTitle?: string;
  errorDescription?: string;
  redirectPath?: string;
  redirectTitle?: string;
};

const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode = 404,
  errorTitle = "Page not found",
  errorDescription = "Something went wrong, page not found",
  redirectPath,
  redirectTitle = "Home",
}) => {
  const [css] = useStyletron();

  return (
    <div className={css(errorPageStyles)}>
      <Button kind={BUTTON_KIND.secondary} className={css(errorCodeStyles)}>
        {redirectTitle}
      </Button>
    </div>
  );
};

export default ErrorPage;
