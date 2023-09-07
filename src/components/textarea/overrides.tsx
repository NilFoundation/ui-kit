import { TextareaOverrides } from "baseui/textarea";
import { PRIMITIVE_COLORS } from "../../shared";
import { TEXTAREA_SIZE } from "./types";
import {
  clearIconContainerModifiedStyles,
  clearIconSize,
  inputContainerModifiedStyles,
  inputDisabledStyles,
  rootDisabledStyles,
} from "./styles";
import { BorderRadiusStyles } from "../../shared/styles/border";

const getTextareaColor = (isError: boolean, isPositive: boolean, isDisabled: boolean, isFocused: boolean): string => {
  if (isFocused) {
    return PRIMITIVE_COLORS.white;
  }
  if (isDisabled) {
    return PRIMITIVE_COLORS.gray500;
  }
  if (isPositive) {
    return PRIMITIVE_COLORS.white;
  }
  if (isError) {
    return PRIMITIVE_COLORS.red400;
  }
  return PRIMITIVE_COLORS.gray500;
};

export const getTextareaOverrides = (size: TEXTAREA_SIZE, isLoading?: boolean): TextareaOverrides => {
  return {
    Root: {
      style: ({ $disabled }) => {
        return {
          position: "relative",
          width: "100%",
          ...BorderRadiusStyles,
          ...(isLoading || $disabled ? rootDisabledStyles : {}),
        };
      },
    },
    InputContainer: {
      style: ({ $disabled }) => ({
        ...(isLoading || $disabled ? inputDisabledStyles : {}),
      }),
    },
    Input: {
      style: ({ $error, $positive, $isDisabled, $isFocused }) => {
        return {
          ...inputContainerModifiedStyles[size],
          "-webkit-text-fill-color": "unset",
          color: getTextareaColor($error, $positive, $isDisabled, $isFocused),

          "::placeholder": {
            color: getTextareaColor($error, $positive, $isDisabled, $isFocused),
          },

          "::-webkit-resizer": {
            display: "none",
          },
        };
      },
    },
    ClearIconContainer: {
      style: {
        ...clearIconContainerModifiedStyles[size],
      },
    },
    ClearIcon: {
      props: {
        size: clearIconSize[size],
      },
    },
  };
};
