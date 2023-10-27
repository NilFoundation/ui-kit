import { PRIMITIVE_COLORS } from "../../shared";
import { BUTTON_KIND, BUTTON_SIZE } from "./types";
import { expandProperty } from "inline-style-expand-shorthand";
import { BorderRadiusStyles } from "../../shared/styles/border";

const buttonBaseStyles = {
  ...BorderRadiusStyles,
  outline: "0",
  boxShadow: "none",
};

export const buttonModifiedStyles = {
  [BUTTON_SIZE.mini]: {
    ...buttonBaseStyles,
  },
  [BUTTON_SIZE.compact]: {
    ...buttonBaseStyles,
  },
  [BUTTON_SIZE.default]: {
    ...buttonBaseStyles,
  },
  [BUTTON_SIZE.large]: {
    ...buttonBaseStyles,
  },
};

export const buttonKindModifiedStyles = {
  [BUTTON_KIND.primary]: {
    backgroundColor: PRIMITIVE_COLORS.white,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray100,
    },

    ":disabled": {
      backgroundColor: PRIMITIVE_COLORS.mono600,
      color: PRIMITIVE_COLORS.gray500,
    },
  },
  [BUTTON_KIND.secondary]: {
    backgroundColor: PRIMITIVE_COLORS.gray700,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray600,
    },

    ":disabled": {
      backgroundColor: PRIMITIVE_COLORS.mono600,
      color: PRIMITIVE_COLORS.gray500,
    },
  },
  [BUTTON_KIND.tertiary]: {
    backgroundColor: "transparent",

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray700,
    },

    ":disabled": {
      backgroundColor: "transparent",
      color: PRIMITIVE_COLORS.gray500,
    },
  },
  [BUTTON_KIND.danger]: {
    backgroundColor: PRIMITIVE_COLORS.red400,
    color: PRIMITIVE_COLORS.white,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.red500,
    },

    ":active": {
      backgroundColor: PRIMITIVE_COLORS.red600,
    },

    ":disabled": {
      backgroundColor: PRIMITIVE_COLORS.mono600,
      color: PRIMITIVE_COLORS.gray500,
    },
  },
  [BUTTON_KIND.toggle]: {
    backgroundColor: PRIMITIVE_COLORS.gray700,
  },
};

export const buttonFocusedModifiedStyles = {
  [BUTTON_KIND.primary]: {
    backgroundColor: PRIMITIVE_COLORS.gray200,
  },
  [BUTTON_KIND.secondary]: {
    backgroundColor: PRIMITIVE_COLORS.gray200,
    color: PRIMITIVE_COLORS.black,
  },
  [BUTTON_KIND.tertiary]: {
    backgroundColor: PRIMITIVE_COLORS.gray600,
  },
  [BUTTON_KIND.danger]: {
    backgroundColor: PRIMITIVE_COLORS.red600,
  },
};

export const buttonDisabledModifiedStyles = {
  [BUTTON_KIND.primary]: {
    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.mono600,
      color: PRIMITIVE_COLORS.gray500,
    },
  },
  [BUTTON_KIND.secondary]: {
    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.mono600,
      color: PRIMITIVE_COLORS.gray500,
    },
  },
  [BUTTON_KIND.tertiary]: {
    ":hover": {
      backgroundColor: "transparent",
      color: PRIMITIVE_COLORS.gray500,
    },
  },
  [BUTTON_KIND.danger]: {
    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.mono600,
      color: PRIMITIVE_COLORS.gray500,
    },
  },
};

export const spinnerModifiedStyles = {
  [BUTTON_SIZE.mini]: {
    ...expandProperty("margin", "0"),
    ...expandProperty("padding", "0 8px"),
  },
  [BUTTON_SIZE.compact]: {
    ...expandProperty("margin", "0"),
    ...expandProperty("padding", "0 12px"),
  },
  [BUTTON_SIZE.default]: {
    ...expandProperty("margin", "0"),
    ...expandProperty("padding", "0 14px"),
  },
  [BUTTON_SIZE.large]: {
    ...expandProperty("margin", "0"),
    ...expandProperty("padding", "0 16px"),
  },
};
