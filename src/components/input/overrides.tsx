import { InputOverrides } from "baseui/input";
import { inputContainerModifiedStyles, inputDisabledStyles, inputModifiedStyles } from "./styles";
import { INPUT_KIND, INPUT_SIZE } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";
import { StyleObject } from "styletron-standard";

const getColor = (isFocused: boolean, kind: INPUT_KIND): string => {
  if (isFocused) {
    return PRIMITIVE_COLORS.gray50;
  }
  if (kind === INPUT_KIND.error) {
    return PRIMITIVE_COLORS.red500;
  }

  return PRIMITIVE_COLORS.gray200;
};

const getBorderStyle = (isFocused: boolean, kind: INPUT_KIND): StyleObject => {
  if (isFocused) {
    return {
      borderColor: PRIMITIVE_COLORS.gray50,
    };
  }

  if (kind === INPUT_KIND.error) {
    return {
      borderColor: PRIMITIVE_COLORS.red500,
    };
  }

  if (kind === INPUT_KIND.secondary) {
    return {
      borderColor: PRIMITIVE_COLORS.gray900,
    };
  }

  return {
    borderColor: PRIMITIVE_COLORS.gray800,
  };
};

const getBackgroundColor = (kind: INPUT_KIND): StyleObject => {
  if (kind === INPUT_KIND.secondary) {
    return {
      backgroundColor: PRIMITIVE_COLORS.gray900,
    };
  }

  return {
    backgroundColor: PRIMITIVE_COLORS.gray800,
  };
};

const getHoverStyles = (kind: INPUT_KIND): StyleObject => {
  const transition = "background-color 0.15s ease-in-out";
  if (kind === INPUT_KIND.secondary) {
    return {
      transition,
      ":hover": {
        backgroundColor: PRIMITIVE_COLORS.gray800,
      },
    };
  }

  return {
    transition,
    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray700,
    },
  };
};

export const getInputOverrides = (size: INPUT_SIZE, kind: INPUT_KIND): InputOverrides => {
  return {
    Root: {
      style: ({ $disabled, $isFocused }) => ({
        ...getBackgroundColor(kind),
        ...inputContainerModifiedStyles[size],
        ...($disabled ? inputDisabledStyles : {}),
        ...getBorderStyle($isFocused, kind),
        ...getHoverStyles(kind),
      }),
    },
    InputContainer: {
      style: ({ $disabled }) => ({
        backgroundColor: "transparent",
        ...($disabled ? inputDisabledStyles : {}),
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
        backgroundColor: "transparent",
        color: getColor($error, $isFocused),
        ...expandProperty("padding", "0 12px 0 0"),
      }),
    },
    EndEnhancer: {
      style: ({ $error, $isFocused }) => ({
        backgroundColor: "transparent",
        ...expandProperty("padding", "0 0 0 12px"),
        color: getColor($error, $isFocused),
      }),
    },
    ClearIcon: {
      props: {
        size: "22px",
      },
      style: ({ $error, $isFocused }) => ({
        color: getColor($error, $isFocused),
      }),
    },
    MaskToggleButton: {
      style: ({ $error, $isFocused }) => ({
        color: getColor($error, $isFocused),
        cursor: "pointer",
      }),
    },
  };
};
