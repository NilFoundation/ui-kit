import { InputOverrides } from "baseui/input";
import { inputContainerModifiedStyles, inputModifiedStyles } from "./styles";
import { INPUT_KIND, INPUT_SIZE } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";
import { StyleObject } from "styletron-standard";

const getColor = (isFocused: boolean, error: boolean, disabled: boolean): string => {
  if (isFocused) {
    return PRIMITIVE_COLORS.gray50;
  }

  if (error) {
    return PRIMITIVE_COLORS.red500;
  }

  if (disabled) {
    return PRIMITIVE_COLORS.gray400;
  }

  return PRIMITIVE_COLORS.gray200;
};

const getBorderStyle = (isFocused: boolean, kind: INPUT_KIND, error: boolean): StyleObject => {
  if (isFocused) {
    return {
      ...expandProperty("borderColor", PRIMITIVE_COLORS.gray50),
    };
  }

  if (error) {
    return {
      ...expandProperty("borderColor", PRIMITIVE_COLORS.red500),
    };
  }

  if (kind === INPUT_KIND.secondary) {
    return {
      ...expandProperty("borderColor", PRIMITIVE_COLORS.gray900),
    };
  }

  return {
    ...expandProperty("borderColor", PRIMITIVE_COLORS.gray800),
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

const getHoverStyles = (kind: INPUT_KIND, disabled: boolean, isFocused: boolean): StyleObject => {
  if (disabled) {
    return {};
  }

  const transition = "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out";

  if (kind === INPUT_KIND.secondary) {
    return {
      transition,
      ":hover": {
        backgroundColor: PRIMITIVE_COLORS.gray800,
        ...(!isFocused ? expandProperty("borderColor", PRIMITIVE_COLORS.gray800) : {}),
      },
    };
  }

  return {
    transition,
    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray700,
      ...(!isFocused ? expandProperty("borderColor", PRIMITIVE_COLORS.gray700) : {}),
    },
  };
};

export const getInputOverrides = (size: INPUT_SIZE, kind: INPUT_KIND): InputOverrides => {
  return {
    Root: {
      style: ({ $disabled, $isFocused, $error }) => ({
        ...getBackgroundColor(kind),
        ...inputContainerModifiedStyles[size],
        ...getBorderStyle($isFocused, kind, $error),
        ...getHoverStyles(kind, $disabled, $isFocused),
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
