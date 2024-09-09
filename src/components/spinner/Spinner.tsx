import { FC } from "react";
import { SPINNER_KIND, SPINNER_SIZE } from "./types";
import { Spinner as BaseSpinner } from "baseui/spinner";
import { StyleObject, withStyle } from "styletron-react";
import { COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

export type SpinnerProps = {
  size?: SPINNER_SIZE;
  kind?: SPINNER_KIND;
  style?: StyleObject;
};

const spinnerIconSize = {
  [SPINNER_SIZE.xSmall]: "12px",
  [SPINNER_SIZE.small]: "16px",
  [SPINNER_SIZE.medium]: "20px",
  [SPINNER_SIZE.large]: "24px",
  [SPINNER_SIZE.xLarge]: "32px",
};

const getSpinnerStylesByKind = (kind: SPINNER_KIND) => {
  switch (kind) {
    case SPINNER_KIND.dark:
      return {
        ...expandProperty("borderColor", COLORS.gray500),
        borderTopColor: COLORS.gray800,
      };
    case SPINNER_KIND.light:
      return {
        ...expandProperty("borderColor", COLORS.gray600),
        borderTopColor: COLORS.gray100,
      };
  }
};

const Spinner: FC<SpinnerProps> = ({ size = SPINNER_SIZE.medium, kind = SPINNER_KIND.light, style: styleProp }) => {
  const style = {
    width: spinnerIconSize[size],
    height: spinnerIconSize[size],
    ...getSpinnerStylesByKind(kind),
    ...styleProp,
  } satisfies StyleObject;

  const StyledElement = withStyle(BaseSpinner, style);

  return <StyledElement />;
};

export default Spinner;
