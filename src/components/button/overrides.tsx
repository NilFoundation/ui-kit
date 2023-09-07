import { ButtonOverrides, CustomColors } from "baseui/button";
import { BUTTON_KIND, BUTTON_SIZE } from "./types";
import { Spinner, SPINNER_SIZE } from "../spinner";
import {
  buttonDisabledModifiedStyles,
  buttonFocusedModifiedStyles,
  buttonKindModifiedStyles,
  buttonModifiedStyles,
  spinnerModifiedStyles,
} from "./style";
import { PRIMITIVE_COLORS } from "../../shared";

const spinnerSize = {
  [BUTTON_SIZE.mini]: SPINNER_SIZE.xSmall,
  [BUTTON_SIZE.compact]: SPINNER_SIZE.small,
  [BUTTON_SIZE.default]: SPINNER_SIZE.medium,
  [BUTTON_SIZE.large]: SPINNER_SIZE.large,
};

const getSpinnerColor = (kind = "gray", disabled: boolean) => {
  if (!disabled) {
    return kind !== "gray" ? PRIMITIVE_COLORS.white : PRIMITIVE_COLORS.black;
  }
  return PRIMITIVE_COLORS.white;
};

export const getButtonOverrides = (kind: BUTTON_KIND, size: BUTTON_SIZE, colors?: CustomColors): ButtonOverrides => {
  const customColorsStyles = colors
    ? {
        ...colors,

        ":hover": {
          ...colors,
        },
      }
    : {};

  return {
    Root: {
      style: ({ $disabled, $isFocusVisible }) => {
        return {
          ...buttonModifiedStyles[size],
          ...buttonKindModifiedStyles[kind],
          ...($isFocusVisible ? buttonFocusedModifiedStyles[kind] : {}),
          ...($disabled ? buttonDisabledModifiedStyles[kind] : {}),
          ...customColorsStyles,
        };
      },
    },
    StartEnhancer: {
      style: {
        marginRight: "8px",
      },
    },
    EndEnhancer: {
      style: {
        marginLeft: "8px",
      },
    },
    LoadingSpinner: {
      component: ({ $disabled }) => (
        <Spinner color={getSpinnerColor(kind, $disabled)} size={spinnerSize[size]} animation />
      ),
    },
    LoadingSpinnerContainer: {
      style: {
        ...spinnerModifiedStyles[size],
      },
    },
  };
};
