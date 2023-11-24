import { InputOverrides } from "baseui/input";
import { inputContainerModifiedStyles, inputDisabledStyles, inputModifiedStyles } from "./styles";
import { INPUT_KIND, INPUT_SIZE } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

const getColor = (isFocused: boolean, kind: INPUT_KIND): string => {
  if (isFocused) {
    return PRIMITIVE_COLORS.white;
  }
  if (kind === INPUT_KIND.error) {
    return PRIMITIVE_COLORS.red400;
  }

  return PRIMITIVE_COLORS.gray200;
};

export const getInputOverrides = (size: INPUT_SIZE, kind: INPUT_KIND): InputOverrides => {
  return {
    Root: {
      style: ({ $disabled }) => ({
        ...inputContainerModifiedStyles[size],
        ...($disabled ? inputDisabledStyles : {}),
      }),
    },
    InputContainer: {
      style: ({ $disabled, $isFocused }) => ({
        ...($disabled ? inputDisabledStyles : {}),
        ...($isFocused ? { outline: "red" } : {}),
      }),
    },
    Input: {
      style: ({ $isFocused }) => ({
        ...inputModifiedStyles[size],
        color: getColor($isFocused, kind),
        "-webkit-text-fill-color": "unset",

        "::placeholder": {
          color: getColor($isFocused, kind),
        },
      }),
    },
    StartEnhancer: {
      style: ({ $error, $isFocused }) => ({
        color: getColor($error, $isFocused),
        ...expandProperty("padding", "0 12px 0 0"),
      }),
    },
    EndEnhancer: {
      style: ({ $error, $isFocused }) => ({
        ...expandProperty("padding", "0 0 0 12px"),
        color: getColor($error, $isFocused),
      }),
    },
    ClearIcon: {
      props: {
        size: "22px",
      },
    },
    MaskToggleButton: {
      style: ({ $error, $isFocused }) => ({
        color: getColor($error, $isFocused),
        cursor: "pointer",
      }),
    },
  };
};
