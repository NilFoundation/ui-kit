import React from "react";
import { useStyletron } from "baseui";
import { styles as s } from "./styles";
import Block from "./ui/Block";
import { HeadingXXLarge, ParagraphMedium, ParagraphSmall } from "baseui/typography";
import { getErrorCodeOverrides, getErrorDescriptionOverrides, getRedirectOverrides } from "./overrides";
import { ArrowUpIcon } from "../icons";
import WhiteRect from "./ui/WhiteRect";

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
      <div className={css(s.columnsStyles["col-0"])}>
        <Block>
          <Redirect href={redirectPath} {...redirectElementProps}>
            <ParagraphSmall overrides={getRedirectOverrides()}>
              <ArrowUpIcon className={css(s.iconStyles)} />
              {redirectTitle}
            </ParagraphSmall>
          </Redirect>
          <WhiteRect $style={{ marginTop: "auto" }} />
        </Block>
      </div>
      <div className={css(s.columnsStyles["col-1"])}>
        <Block $style={{ flexGrow: "0" }}>
          <HeadingXXLarge overrides={getErrorCodeOverrides()}>{errorCode}</HeadingXXLarge>
        </Block>
        <div className={css(s.errorContainerStyles)}>
          <div>
            <WhiteRect />
          </div>
          <Block $style={s.errorDescrStyles}>
            <ParagraphMedium overrides={getErrorDescriptionOverrides()}>{errorDescription}</ParagraphMedium>
            <WhiteRect />
          </Block>
        </div>
      </div>
      <div className={css(s.columnsStyles["col-2"])}>
        <Block $style={{ marginTop: "250px" }}>
          <WhiteRect $style={{ marginBottom: "auto" }} />
        </Block>
      </div>
      <div className={css(s.columnsStyles["col-3"])}>
        <Block $style={{ marginTop: "calc(250px - 30px)" }}>
          <WhiteRect $style={{ marginBottom: "auto" }} />
        </Block>
      </div>
    </div>
  );
};

export default ErrorPage;
