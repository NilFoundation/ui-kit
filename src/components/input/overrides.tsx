import { InputOverrides } from "baseui/input";
import { inputContainerModifiedStyles, inputDisabledStyles, inputModifiedStyles } from "./styles";
import { INPUT_SIZE } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

const getInputColor = (isError: boolean, isPositive: boolean, isFocused: boolean): string => {
  if (isFocused) {
    return PRIMITIVE_COLORS.white;
  }
  if (isError) {
    return PRIMITIVE_COLORS.red400;
  }
  if (isPositive) {
    return PRIMITIVE_COLORS.white;
  }
  return PRIMITIVE_COLORS.gray500;
};

const getIconColor = (isError: boolean, isPositive: boolean, isFocused: boolean): string => {
  if (isFocused) {
    return PRIMITIVE_COLORS.gray500;
  }
  if (isError) {
    return PRIMITIVE_COLORS.red400;
  }
  if (isPositive) {
    return PRIMITIVE_COLORS.green400;
  }
  return PRIMITIVE_COLORS.gray500;
};

export const getInputOverrides = (size: INPUT_SIZE): InputOverrides => {
  return {
    Root: {
      style: ({ $disabled }) => ({
        ...inputContainerModifiedStyles[size],
        ...($disabled ? inputDisabledStyles : {}),
      }),
    },
    InputContainer: {
      style: ({ $disabled }) => ({
        ...($disabled ? inputDisabledStyles : {}),
      }),
    },
    Input: {
      style: ({ $error, $positive, $isFocused }) => ({
        ...inputModifiedStyles[size],
        color: getInputColor($error, $positive, $isFocused),
        "-webkit-text-fill-color": "unset",

        "::placeholder": {
          color: getInputColor($error, $positive, $isFocused),
        },
      }),
    },
    StartEnhancer: {
      style: ({ $error, $positive, $isFocused }) => ({
        color: getIconColor($error, $positive, $isFocused),
        ...expandProperty("padding", "0 12px 0 0"),
      }),
    },
    EndEnhancer: {
      style: ({ $error, $positive, $isFocused }) => ({
        ...expandProperty("padding", "0 0 0 12px"),
        color: getIconColor($error, $positive, $isFocused),
      }),
    },
    ClearIcon: {
      props: {
        size: "22px",
      },
    },
    MaskToggleButton: {
      style: {
        color: PRIMITIVE_COLORS.gray500,
      },
    },
  };
};
