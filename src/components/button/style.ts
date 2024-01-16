import { PRIMITIVE_COLORS, SPACE } from "../../shared";
import { BUTTON_KIND, BUTTON_SIZE } from "./types";
import { expandProperty } from "inline-style-expand-shorthand";

const buttonBaseStyles = {
  outline: "0",
  boxShadow: "none",
  ...expandProperty("borderRadius", "8px"),
};

const focusedButtonBaseStyles = {
  boxShadow: `0px 0px 0px 2px ${PRIMITIVE_COLORS.gray900}, 0px 0px 0px 4px ${PRIMITIVE_COLORS.gray50}`,
};

export const buttonModifiedStyles = {
  [BUTTON_SIZE.mini]: {
    ...buttonBaseStyles,
    ...expandProperty("padding", "4px 8px"),
  },
  [BUTTON_SIZE.compact]: {
    ...buttonBaseStyles,
    ...expandProperty("padding", "8px 16px"),
  },
  [BUTTON_SIZE.default]: {
    ...buttonBaseStyles,
    ...expandProperty("padding", "12px 24px"),
  },
  [BUTTON_SIZE.large]: {
    ...buttonBaseStyles,
    ...expandProperty("padding", "16px 32px"),
  },
};

export const buttonKindModifiedStyles = {
  [BUTTON_KIND.primary]: {
    backgroundColor: PRIMITIVE_COLORS.gray50,
    color: PRIMITIVE_COLORS.gray900,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray200,
    },

    ":active:not(:disabled)": {
      backgroundColor: PRIMITIVE_COLORS.gray300,
    },

    ":disabled": {
      backgroundColor: PRIMITIVE_COLORS.gray800,
      color: PRIMITIVE_COLORS.gray500,
    },
  },
  [BUTTON_KIND.secondary]: {
    backgroundColor: PRIMITIVE_COLORS.gray800,
    color: PRIMITIVE_COLORS.gray200,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray700,
      color: PRIMITIVE_COLORS.gray50,
    },

    ":active:not(:disabled)": {
      backgroundColor: PRIMITIVE_COLORS.gray600,
      color: PRIMITIVE_COLORS.gray50,
    },

    ":disabled": {
      color: PRIMITIVE_COLORS.gray500,
    },
  },
  [BUTTON_KIND.tertiary]: {
    backgroundColor: "transparent",

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray800,
      color: PRIMITIVE_COLORS.gray50,
    },

    ":active:not(:disabled)": {
      backgroundColor: PRIMITIVE_COLORS.gray700,
      color: PRIMITIVE_COLORS.gray50,
    },

    ":disabled": {
      color: PRIMITIVE_COLORS.gray500,
    },
  },
  [BUTTON_KIND.danger]: {
    backgroundColor: PRIMITIVE_COLORS.red500,
    color: PRIMITIVE_COLORS.gray50,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.red600,
    },

    ":active:not(:disabled)": {
      backgroundColor: PRIMITIVE_COLORS.red800,
    },

    ":disabled": {
      backgroundColor: PRIMITIVE_COLORS.red800,
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
    backgroundColor: PRIMITIVE_COLORS.gray50,
    ...focusedButtonBaseStyles,
  },
  [BUTTON_KIND.secondary]: {
    color: PRIMITIVE_COLORS.gray50,
    ...focusedButtonBaseStyles,
  },
  [BUTTON_KIND.tertiary]: {
    ...focusedButtonBaseStyles,
  },
  [BUTTON_KIND.danger]: {
    ...focusedButtonBaseStyles,
  },
  [BUTTON_KIND.toggle]: {
    color: PRIMITIVE_COLORS.gray50,
    border: `1px solid ${PRIMITIVE_COLORS.gray50}`,
    backgroundColor: PRIMITIVE_COLORS.gray800,
  },
};

export const buttonDisabledModifiedStyles = {
  [BUTTON_KIND.primary]: {
    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray800,
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
