import { TextareaOverrides } from "baseui/textarea";
import { TEXTAREA_KIND, TEXTAREA_SIZE } from "./types";
import { clearIconContainerModifiedStyles, clearIconSize, inputModifiedStyles, inputContainerStyles } from "./styles";
import { getBackgroundColor, getColor, getHoverStyles } from "../../shared/theme/textFieldCommonOverrides";
import { resetAutoCompleteStyles } from "../../shared/styles/resetAutoCompleteStyles";
import { expandProperty } from "inline-style-expand-shorthand";
import { boxShadowFocusStyles, boxShadowErrorStyles } from "../../shared/styles/boxShadowSharedStyles";

export const getTextareaOverrides = (size: TEXTAREA_SIZE, kind: TEXTAREA_KIND): TextareaOverrides => {
  return {
    Root: {
      style: ({ $disabled, $isFocused, $error }) => ({
        ...inputContainerStyles,
        ...getBackgroundColor(kind),
        ...getHoverStyles(kind, $disabled, $isFocused, $error),
        position: "relative",
        width: "100%",
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
      style: ({ $error, $isFocused, $disabled }) => {
        return {
          ...inputModifiedStyles[size],
          color: getColor($isFocused, $error, $disabled),
          "-webkit-text-fill-color": "unset",

          "::placeholder": {
            color: getColor($isFocused, $error, $disabled),
          },

          "::-webkit-resizer": {
            display: "none",
          },
          ...resetAutoCompleteStyles,
          ...expandProperty("transition", "color 0.15s ease-in"),
        };
      },
    },
    ClearIconContainer: {
      style: ({ $error, $disabled, $isFocused }) => ({
        ...clearIconContainerModifiedStyles[size],
        ...expandProperty("transition", "color 0.15s ease-in"),
        color: getColor($isFocused, $error, $disabled),
      }),
    },
    ClearIcon: {
      props: {
        size: clearIconSize[size],
      },
    },
  };
};
