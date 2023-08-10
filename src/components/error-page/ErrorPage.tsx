import React from "react";
import { useStyletron } from "baseui";
import { styles as s } from "./styles";
import { BUTTON_KIND, Button } from "../button";
import { ArrowUpIcon } from "../icons";
import { HeadingXXLarge, ParagraphMedium } from "baseui/typography";
import { getErrorCodeOverrides, getErrorDescriptionOverrides } from "./overrides";

export type ErrorPageProps<T extends React.ElementType = React.ElementType> = {
  errorCode?: number;
  errorDescription?: string;
  redirectPath?: string;
  redirectElement?: T;
  redirectElementProps?: Omit<React.ComponentProps<T>, "href">;
  redirectTitle?: string;
};

const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode = 404,
  errorDescription = "Something went wrong, page not found",
  redirectTitle = "Home",
  redirectElement: Redirect = "a",
  redirectElementProps,
  redirectPath,
}) => {
  const [css] = useStyletron();

  return (
    <div className={css(s.containerStyles)}>
      <div className={css(s.colStyles)}>
        <Redirect href={redirectPath} {...redirectElementProps}>
          <Button kind={BUTTON_KIND.tertiary} className={css(s.btnStyles)}>
            <ArrowUpIcon className={css(s.iconStyles)} />
            <p>{redirectTitle}</p>
          </Button>
        </Redirect>
        <div className={css(s.whiteRectangleStyles)} />
      </div>
      <div className={css(s.errorCodeStyles)}>
        <HeadingXXLarge overrides={getErrorCodeOverrides()}>{errorCode}</HeadingXXLarge>
      </div>
      <div className={css(s.errorDescriptionStyles)}>
        <ParagraphMedium overrides={getErrorDescriptionOverrides()}>{errorDescription}</ParagraphMedium>
      </div>
    </div>
  );
};

export default ErrorPage;
