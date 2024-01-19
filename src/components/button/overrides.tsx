import { ButtonOverrides, CustomColors } from "baseui/button";
import { BUTTON_KIND, BUTTON_SIZE } from "./types";
import { Spinner, SPINNER_SIZE } from "../spinner";
import {
  buttonDisabledModifiedStyles,
  buttonFocusedModifiedStyles,
  buttonKindModifiedStyles,
  buttonModifiedStyles,
  checkedToggleButtonModifiedStyles,
  spinnerModifiedStyles,
} from "./style";
import { PRIMITIVE_COLORS } from "../../shared";

const spinnerSize = {
  [BUTTON_SIZE.mini]: SPINNER_SIZE.xSmall,
  [BUTTON_SIZE.compact]: SPINNER_SIZE.small,
  [BUTTON_SIZE.default]: SPINNER_SIZE.medium,
  [BUTTON_SIZE.large]: SPINNER_SIZE.large,
};

const getSpinnerColor = (kind: BUTTON_KIND, disabled: boolean) => {
  if (disabled) {
    return PRIMITIVE_COLORS.gray500;
  }

  switch (kind) {
    case BUTTON_KIND.primary:
      return PRIMITIVE_COLORS.gray900;
    case BUTTON_KIND.secondary:
    case BUTTON_KIND.tertiary:
    case BUTTON_KIND.text:
    case BUTTON_KIND.toggle:
    case BUTTON_KIND.danger:
      return PRIMITIVE_COLORS.gray50;
    default:
      return PRIMITIVE_COLORS.black;
  }
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
