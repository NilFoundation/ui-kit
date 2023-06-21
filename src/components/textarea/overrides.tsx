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

const getPlaceholderColor = (isError: boolean, isPositive: boolean, isDisabled: boolean): string => {
  if (isDisabled) {
    return PRIMITIVE_COLORS.primary500;
  }
  if (isPositive) {
    return PRIMITIVE_COLORS.white;
  }
  if (isError) {
    return PRIMITIVE_COLORS.error400;
  }
  return PRIMITIVE_COLORS.primary500;
};

export const getTextareaOverrides = (size: TEXTAREA_SIZE, isLoading?: boolean): TextareaOverrides => {
  return {
    Root: {
      style: ({ $disabled }) => {
        return {
          position: "relative",
          width: "100%",
          borderBottomLeftRadius: "2px",
          borderBottomRightRadius: "2px",
          borderTopLeftRadius: "2px",
          borderTopRightRadius: "2px",
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
      style: ({ $error, $positive, $isDisabled }) => {
        return {
          ...inputContainerModifiedStyles[size],
          "-webkit-text-fill-color": "unset",

          "::placeholder": {
            color: getPlaceholderColor($error, $positive, $isDisabled),
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
