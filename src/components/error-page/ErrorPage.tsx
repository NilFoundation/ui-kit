import React from "react";
import { useStyletron } from "baseui";
import { styles as s } from "./styles";
import Block from "./ui/Block";
import { HeadingXXLarge, ParagraphMedium } from "baseui/typography";
import { getErrorCodeOverrides, getErrorDescriptionOverrides } from "./overrides";
import WhiteRect from "./ui/WhiteRect";
import { ErrorPageProps } from "./types";
import Redirect from "./ui/Redirect";
//import { useIsMobile } from "./useIsMobile";

const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode,
  errorDescription,
  redirectTitle,
  actionElement,
  redirectPath,
}) => {
  const [css] = useStyletron();
  const isMobile = false;

  return (
    <div className={css(s.containerStyles)}>
      <div className={css(s.columnsStyles["col-0"])}>
        <Block>
          {actionElement !== undefined ? (
            actionElement
          ) : (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <Redirect redirectPath={redirectPath!} redirectTitle={redirectTitle!} />
          )}
          {!isMobile && <WhiteRect $style={{ marginTop: "auto" }} />}
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
      {!isMobile && (
        <>
          <div className={css(s.columnsStyles["col-2"])}>
            <Block $style={{ marginTop: "calc(100vh / 2.25)" }}>
              <WhiteRect $style={{ marginBottom: "auto" }} />
            </Block>
          </div>
          <div className={css(s.columnsStyles["col-3"])}>
            <Block $style={{ marginTop: "calc(100vh / 2.25 + (100vh - (100vh / 2.25)) / 2 - 30px)" }}>
              <WhiteRect $style={{ marginBottom: "auto" }} />
            </Block>
          </div>
        </>
      )}
    </div>
  );
};

export default ErrorPage;
