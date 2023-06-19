import { InputOverrides } from "baseui/input";
import { inputContainerModifiedStyles, inputDisabledStyles, inputModifiedStyles } from "./styles";
import { INPUT_SIZE } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

const getPlaceholderColor = (isError: boolean, isPositive: boolean, isFocused: boolean): string => {
  if (isPositive || isFocused) {
    return PRIMITIVE_COLORS.white;
  }
  if (isError) {
    return PRIMITIVE_COLORS.error400;
  }
  return PRIMITIVE_COLORS.primary500;
};

const getIconColor = (isError: boolean, isPositive: boolean, isFocused: boolean): string => {
  if (isFocused) {
    return PRIMITIVE_COLORS.primary500;
  }
  if (isError) {
    return PRIMITIVE_COLORS.error400;
  }
  if (isPositive) {
    return PRIMITIVE_COLORS.positive400;
  }
  return PRIMITIVE_COLORS.primary500;
};

export const getInputOverrides = (size: INPUT_SIZE): InputOverrides => {
  return {
    Root: {
      style: ({ $disabled }) => ({
        borderBottomLeftRadius: "2px",
        borderBottomRightRadius: "2px",
        borderTopLeftRadius: "2px",
        borderTopRightRadius: "2px",
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
        "-webkit-text-fill-color": "unset",

        "::placeholder": {
          color: getPlaceholderColor($error, $positive, $isFocused),
        },
      }),
    },
    StartEnhancer: {
      style: ({ $error, $positive, $isFocused }) => ({
        color: getIconColor($error, $positive, $isFocused),
        padding: "0 12px 0 0",
      }),
    },
    EndEnhancer: {
      style: ({ $error, $positive, $isFocused }) => ({
        color: getIconColor($error, $positive, $isFocused),
        padding: "0 0 0 12px",
      }),
    },
    ClearIcon: {
      props: {
        size: "22px",
      },
    },
    MaskToggleButton: {
      style: {
        color: PRIMITIVE_COLORS.primary500,
      },
    },
  };
};
