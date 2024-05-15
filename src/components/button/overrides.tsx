import { ButtonOverrides, CustomColors } from "baseui/button";
import { BUTTON_KIND, BUTTON_SIZE } from "./types";
import { Spinner, SPINNER_KIND, SPINNER_SIZE } from "../spinner";
import {
  buttonDisabledModifiedStyles,
  buttonFocusedModifiedStyles,
  buttonKindModifiedStyles,
  buttonModifiedStyles,
  checkedToggleButtonModifiedStyles,
  spinnerModifiedStyles,
} from "./style";

const spinnerSize = {
  [BUTTON_SIZE.mini]: SPINNER_SIZE.xSmall,
  [BUTTON_SIZE.compact]: SPINNER_SIZE.small,
  [BUTTON_SIZE.default]: SPINNER_SIZE.medium,
  [BUTTON_SIZE.large]: SPINNER_SIZE.large,
};

const getSpinnerKind = (kind: BUTTON_KIND, disabled: boolean) => {
  if (kind === BUTTON_KIND.primary) {
    return SPINNER_KIND.dark;
  }

  return disabled ? SPINNER_KIND.light : SPINNER_KIND.dark;
};

export const getButtonOverrides = (
  kind: BUTTON_KIND,
  size: BUTTON_SIZE,
  colors?: CustomColors,
  isChecked?: boolean
): ButtonOverrides => {
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
          ...(isChecked ? checkedToggleButtonModifiedStyles : {}),
          ...($disabled ? buttonDisabledModifiedStyles[kind] : {}),
          ...customColorsStyles,
        };
      },
    },
    StartEnhancer: {
      style: {
        marginRight: "4px",
      },
    },
    EndEnhancer: {
      style: {
        marginLeft: "4px",
      },
    },
    LoadingSpinner: {
      component: ({ $disabled }) => (
        <Spinner kind={getSpinnerKind(kind, $disabled)} size={spinnerSize[size]} animation />
      ),
    },
    LoadingSpinnerContainer: {
      style: {
        ...spinnerModifiedStyles[size],
      },
    },
  };
};
