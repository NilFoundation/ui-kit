import { PRIMITIVE_COLORS, SPACE } from "../../shared";
import { BUTTON_KIND, BUTTON_SIZE } from "./types";
import { expandProperty } from "inline-style-expand-shorthand";
import { BorderRadiusStyles } from "../../shared/styles/border";

const buttonBaseStyles = {
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
    ...BorderRadiusStyles,
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
    ...BorderRadiusStyles,
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
    ...BorderRadiusStyles,
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
    ...BorderRadiusStyles,
    backgroundColor: PRIMITIVE_COLORS.red400,
    color: PRIMITIVE_COLORS.white,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.red500,
    },

    ":active:not(:disabled)": {
      backgroundColor: PRIMITIVE_COLORS.red600,
    },

    ":disabled": {
      backgroundColor: PRIMITIVE_COLORS.mono600,
      color: PRIMITIVE_COLORS.gray500,
    },
  },
  [BUTTON_KIND.toggle]: {
    backgroundColor: PRIMITIVE_COLORS.gray800,
    color: PRIMITIVE_COLORS.gray200,
    ...expandProperty("borderRadius", SPACE[2]),
    ...expandProperty("padding", "8px 12px"),

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray700,
      color: PRIMITIVE_COLORS.gray100,
    },

    ":active:not(:disabled)": {
      backgroundColor: PRIMITIVE_COLORS.gray600,
      color: PRIMITIVE_COLORS.gray100,
    },

    ":disabled": {
      color: PRIMITIVE_COLORS.gray400,
      backgroundColor: PRIMITIVE_COLORS.gray800,
    },
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
  [BUTTON_KIND.toggle]: {
    color: PRIMITIVE_COLORS.gray50,
    border: `1px solid ${PRIMITIVE_COLORS.gray50}`,
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
  [BUTTON_KIND.toggle]: {
    ":hover": {
      color: PRIMITIVE_COLORS.gray400,
      backgroundColor: PRIMITIVE_COLORS.gray800,
    },
  },
};

export const spinnerModifiedStyles = {
  [BUTTON_SIZE.mini]: {
    ...expandProperty("margin", "0"),
    ...expandProperty("padding", `0 ${SPACE[8]}`),
  },
  [BUTTON_SIZE.compact]: {
    ...expandProperty("margin", "0"),
    ...expandProperty("padding", `0 ${SPACE[12]}`),
  },
  [BUTTON_SIZE.default]: {
    ...expandProperty("margin", "0"),
    ...expandProperty("padding", "0 14px"),
  },
  [BUTTON_SIZE.large]: {
    ...expandProperty("margin", "0"),
    ...expandProperty("padding", `0 ${SPACE[16]}`),
  },
};

export const checkedToggleButtonModifiedStyles = {
  color: PRIMITIVE_COLORS.gray900,
  backgroundColor: PRIMITIVE_COLORS.gray50,

  ":hover": {
    backgroundColor: PRIMITIVE_COLORS.gray50,
    color: PRIMITIVE_COLORS.gray900,
  },

  ":active:not(:disabled)": {
    backgroundColor: PRIMITIVE_COLORS.gray50,
    color: PRIMITIVE_COLORS.gray900,
  },

  ":disabled": {
    backgroundColor: PRIMITIVE_COLORS.gray800,
    color: PRIMITIVE_COLORS.gray400,
  },
};
