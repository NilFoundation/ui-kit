import { COLORS, SPACE } from "../../shared";
import { BUTTON_KIND, BUTTON_SIZE } from "./types";
import { expandProperty } from "inline-style-expand-shorthand";
import { boxShadowFocusStyles } from "../../shared/styles/boxShadowSharedStyles";

const buttonBaseStyles = {
  outline: "0",
  boxShadow: "none",
  ...expandProperty("borderRadius", "8px"),
  transitionProperty: "background-color, color",
  transitionDuration: "0.15s",
  transitionTimingFunction: "ease-in",
};

export const buttonModifiedStyles = {
  [BUTTON_SIZE.mini]: {
    ...buttonBaseStyles,
    ...expandProperty("padding", "4px 8px"),
    fontSize: "12px",
  },
  [BUTTON_SIZE.compact]: {
    ...buttonBaseStyles,
    ...expandProperty("padding", "8px 16px"),
    fontSize: "12px",
  },
  [BUTTON_SIZE.default]: {
    ...buttonBaseStyles,
    ...expandProperty("padding", "12px 24px"),
    fontSize: "16px",
  },
  [BUTTON_SIZE.large]: {
    ...buttonBaseStyles,
    ...expandProperty("padding", "16px 32px"),
    fontSize: "16px",
  },
};

export const buttonKindModifiedStyles = {
  [BUTTON_KIND.primary]: {
    backgroundColor: COLORS.gray50,
    color: COLORS.gray900,

    ":hover": {
      backgroundColor: COLORS.gray200,
    },

    ":active:not(:disabled)": {
      backgroundColor: COLORS.gray300,
    },

    ":disabled": {
      backgroundColor: COLORS.gray800,
      color: COLORS.gray500,
    },
  },
  [BUTTON_KIND.secondary]: {
    backgroundColor: COLORS.gray800,
    color: COLORS.gray200,

    ":hover": {
      backgroundColor: COLORS.gray700,
      color: COLORS.gray50,
    },

    ":active:not(:disabled)": {
      backgroundColor: COLORS.gray600,
      color: COLORS.gray50,
    },

    ":disabled": {
      color: COLORS.gray500,
      backgroundColor: COLORS.gray800,
    },
  },
  [BUTTON_KIND.tertiary]: {
    backgroundColor: "transparent",

    ":hover": {
      backgroundColor: COLORS.gray800,
      color: COLORS.gray50,
    },

    ":active:not(:disabled)": {
      backgroundColor: COLORS.gray700,
      color: COLORS.gray50,
    },

    ":disabled": {
      color: COLORS.gray500,
    },
  },
  [BUTTON_KIND.danger]: {
    backgroundColor: COLORS.red500,
    color: COLORS.gray50,

    ":hover": {
      backgroundColor: COLORS.red600,
    },

    ":active:not(:disabled)": {
      backgroundColor: COLORS.red800,
    },

    ":disabled": {
      backgroundColor: COLORS.red800,
      color: COLORS.gray500,
    },
  },
  [BUTTON_KIND.toggle]: {
    backgroundColor: COLORS.gray800,
    color: COLORS.gray200,

    ":hover": {
      backgroundColor: COLORS.gray700,
      color: COLORS.gray50,
    },

    ":active:not(:disabled)": {
      backgroundColor: COLORS.gray600,
      color: COLORS.gray50,
    },

    ":disabled": {
      color: COLORS.gray500,
      backgroundColor: COLORS.gray800,
    },
  },
  [BUTTON_KIND.text]: {
    backgroundColor: "transparent",
    color: COLORS.gray200,
    textDecoration: "underline",

    ":hover": {
      backgroundColor: "transparent",
      color: COLORS.gray50,
    },

    ":active:not(:disabled)": {
      backgroundColor: "transparent",
      color: COLORS.gray50,
    },

    ":disabled": {
      backgroundColor: "transparent",
      color: COLORS.gray500,
    },
  },
};

export const buttonFocusedModifiedStyles = {
  [BUTTON_KIND.primary]: {
    backgroundColor: COLORS.gray50,
    ...boxShadowFocusStyles,
  },
  [BUTTON_KIND.secondary]: {
    color: COLORS.gray50,
    ...boxShadowFocusStyles,
  },
  [BUTTON_KIND.tertiary]: {
    ...boxShadowFocusStyles,
  },
  [BUTTON_KIND.danger]: {
    ...boxShadowFocusStyles,
  },
  [BUTTON_KIND.toggle]: {
    color: COLORS.gray50,
    ...boxShadowFocusStyles,
  },
  [BUTTON_KIND.text]: {
    color: COLORS.gray50,
    ...boxShadowFocusStyles,
  },
};

export const buttonDisabledModifiedStyles = {
  [BUTTON_KIND.primary]: {
    ":hover": {
      backgroundColor: COLORS.gray800,
      color: COLORS.gray500,
    },
  },
  [BUTTON_KIND.secondary]: {
    ":hover": {
      backgroundColor: COLORS.gray800,
      color: COLORS.gray500,
    },
  },
  [BUTTON_KIND.tertiary]: {
    ":hover": {
      backgroundColor: "transparent",
      color: COLORS.gray500,
    },
  },
  [BUTTON_KIND.danger]: {
    ":hover": {
      backgroundColor: COLORS.red800,
      color: COLORS.gray500,
    },
  },
  [BUTTON_KIND.toggle]: {
    ":hover": {
      color: COLORS.gray500,
      backgroundColor: COLORS.gray800,
    },
  },
  [BUTTON_KIND.text]: {
    ":hover": {
      color: COLORS.gray500,
      backgroundColor: "transparent",
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
  backgroundColor: COLORS.gray50,
  color: COLORS.gray900,

  ":hover": {
    backgroundColor: COLORS.gray200,
  },

  ":active:not(:disabled)": {
    backgroundColor: COLORS.gray300,
  },

  ":disabled": {
    backgroundColor: COLORS.gray800,
    color: COLORS.gray500,
  },
};
