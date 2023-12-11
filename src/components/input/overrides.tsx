import { InputOverrides } from "baseui/input";
import { inputContainerModifiedStyles, inputModifiedStyles } from "./styles";
import { INPUT_KIND, INPUT_SIZE } from "./types";
import { expandProperty } from "inline-style-expand-shorthand";
import {
  getBackgroundColor,
  getBorderStyles,
  getColor,
  getHoverStyles,
} from "../../shared/theme/textFieldCommonOverrides";

export const getInputOverrides = (size: INPUT_SIZE, kind: INPUT_KIND): InputOverrides => {
  return {
    Root: {
      style: ({ $disabled, $isFocused, $error }) => ({
        boxSizing: "border-box",
        ...getBackgroundColor(kind),
        ...inputContainerModifiedStyles[size],
        ...getBorderStyles($isFocused, kind, $error),
        ...getHoverStyles(kind, $disabled, $isFocused, $error),
      }),
    },
    InputContainer: {
      style: {
        backgroundColor: "transparent",
      },
    },
    Input: {
      style: ({ $isFocused, $error, $disabled }) => ({
        ...inputModifiedStyles[size],
        color: getColor($isFocused, $error, $disabled),
        "-webkit-text-fill-color": "unset",

        "::placeholder": {
          color: getColor($isFocused, $error, $disabled),
        },
      }),
    },
    StartEnhancer: {
      style: ({ $error, $isFocused, $disabled }) => ({
        backgroundColor: "transparent",
        color: getColor($isFocused, $error, $disabled),
        ...expandProperty("padding", "0 12px 0 0"),
      }),
    },
    EndEnhancer: {
      style: ({ $error, $isFocused, $disabled }) => ({
        backgroundColor: "transparent",
        ...expandProperty("padding", "0 0 0 12px"),
        color: getColor($isFocused, $error, $disabled),
      }),
    },
    ClearIcon: {
      props: {
        size: "22px",
      },
      style: ({ $error, $isFocused, $disabled }) => ({
        color: getColor($isFocused, $error, $disabled),
      }),
    },
    MaskToggleButton: {
      style: ({ $error, $isFocused, $disabled }) => ({
        color: getColor($isFocused, $error, $disabled),
        cursor: "pointer",
      }),
    },
  };
};
