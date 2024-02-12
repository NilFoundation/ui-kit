import { InputOverrides } from "baseui/input";
import { inputContainerModifiedStyles, inputModifiedStyles } from "./styles";
import { INPUT_KIND, INPUT_SIZE } from "./types";
import { expandProperty } from "inline-style-expand-shorthand";
import { getBackgroundColor, getColor, getHoverStyles } from "../../shared/theme/textFieldCommonOverrides";
import { resetAutoCompleteStyles } from "../../shared/styles/resetAutoCompleteStyles";
import { boxShadowFocusStyles, boxShadowErrorStyles } from "../../shared/styles/boxShadowSharedStyles";

export const getInputOverrides = (size: INPUT_SIZE, kind: INPUT_KIND): InputOverrides => {
  return {
    Root: {
      style: ({ $disabled, $isFocused, $error }) => ({
        boxSizing: "border-box",
        ...getBackgroundColor(kind),
        ...inputContainerModifiedStyles[size],
        ...getHoverStyles(kind, $disabled, $isFocused, $error),
        ...($isFocused ? boxShadowFocusStyles : {}),
        ...($error ? boxShadowErrorStyles : {}),
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
        ...resetAutoCompleteStyles,
      }),
    },
    StartEnhancer: {
      style: ({ $error, $isFocused, $disabled }) => ({
        backgroundColor: "transparent",
        color: getColor($isFocused, $error, $disabled),
        ...expandProperty("padding", "0 8px 0 0"),
      }),
    },
    EndEnhancer: {
      style: ({ $error, $isFocused, $disabled }) => ({
        backgroundColor: "transparent",
        ...expandProperty("padding", "0 0 0 8px"),
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
