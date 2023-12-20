import { TextareaOverrides } from "baseui/textarea";
import { TEXTAREA_KIND, TEXTAREA_SIZE } from "./types";
import { clearIconContainerModifiedStyles, clearIconSize, inputModifiedStyles, inputContainerStyles } from "./styles";
import {
  getBackgroundColor,
  getBorderStyles,
  getColor,
  getHoverStyles,
} from "../../shared/theme/textFieldCommonOverrides";
import { resetAutoCompleteStyles } from "../../shared/styles/resetAutoCompleteStyles";

export const getTextareaOverrides = (size: TEXTAREA_SIZE, kind: TEXTAREA_KIND): TextareaOverrides => {
  return {
    Root: {
      style: ({ $disabled, $isFocused, $error }) => ({
        ...inputContainerStyles,
        ...getBackgroundColor(kind),
        ...getBorderStyles($isFocused, kind, $error),
        ...getHoverStyles(kind, $disabled, $isFocused, $error),
        position: "relative",
        width: "100%",
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
        };
      },
    },
    ClearIconContainer: {
      style: ({ $error, $disabled, $isFocused }) => ({
        ...clearIconContainerModifiedStyles[size],
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
