import { StyleObject } from "styletron-standard";
import { INPUT_KIND, TEXTAREA_KIND } from "../../components";
import { PRIMITIVE_COLORS } from "./colors";
import { expandProperty } from "inline-style-expand-shorthand";

type TextFiledKindUnion = INPUT_KIND | TEXTAREA_KIND;

export const getColor = (isFocused: boolean, error: boolean, disabled: boolean): string => {
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

export const getBackgroundColor = (kind: TextFiledKindUnion): StyleObject => {
  if (kind === INPUT_KIND.secondary) {
    return {
      backgroundColor: PRIMITIVE_COLORS.gray900,
    };
  }

  return {
    backgroundColor: PRIMITIVE_COLORS.gray800,
  };
};

export const getBorderStyles = (isFocused: boolean, kind: TextFiledKindUnion, error: boolean): StyleObject => {
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

export const getHoverStyles = (kind: TextFiledKindUnion, disabled: boolean, isFocused: boolean): StyleObject => {
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
