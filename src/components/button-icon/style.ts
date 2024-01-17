import { StyleObject } from "styletron-standard";
import { BUTTON_ICON_KIND, BUTTON_ICON_SIZE } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

export const buttonIconDefaultStyle: StyleObject = {
  borderRadius: "2px",
  width: "32px",
  height: "32px",
  transition: "background-color color 0.15s ease-in-out",
  border: "1px solid transparent",
  boxShadow: "none",
  position: "relative",
  cursor: "pointer",
  padding: "0",
  outlineWidth: "1px",
  appearance: "none",
  boxSizing: "border-box",
  textDecoration: "none",
};

const buttonIconKindModifiedStyle: Record<BUTTON_ICON_KIND, StyleObject> = {
  [BUTTON_ICON_KIND.primary]: {
    backgroundColor: PRIMITIVE_COLORS.gray50,
    color: PRIMITIVE_COLORS.gray900,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray200,
    },
    ":active": {
      backgroundColor: PRIMITIVE_COLORS.gray300,
    },
    ":focus": {
      outlineColor: PRIMITIVE_COLORS.gray900,
    },
    ":disabled": {
      backgroundColor: PRIMITIVE_COLORS.gray800,
      color: PRIMITIVE_COLORS.gray400,
      pointerEvents: "none",
    },
  },
  [BUTTON_ICON_KIND.secondary]: {
    backgroundColor: PRIMITIVE_COLORS.gray800,
    color: PRIMITIVE_COLORS.gray50,
    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray700,
    },
    ":active": {
      backgroundColor: PRIMITIVE_COLORS.gray600,
    },
    ":focus": {
      backgroundColor: PRIMITIVE_COLORS.gray800,
      outlineColor: PRIMITIVE_COLORS.gray50,
    },
    ":disabled": {
      backgroundColor: PRIMITIVE_COLORS.gray800,
      color: PRIMITIVE_COLORS.gray400,
      pointerEvents: "none",
    },
  },
  [BUTTON_ICON_KIND.tertiary]: {
    backgroundColor: "transparent",
    color: PRIMITIVE_COLORS.gray50,
    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray800,
      color: PRIMITIVE_COLORS.gray200,
    },
    ":active": {
      backgroundColor: PRIMITIVE_COLORS.gray700,
      color: PRIMITIVE_COLORS.gray300,
    },
    ":focus": {
      outlineColor: PRIMITIVE_COLORS.gray50,
    },
    ":disabled": {
      backgroundColor: "transparent",
      color: PRIMITIVE_COLORS.gray400,
      pointerEvents: "none",
    },
  },
  [BUTTON_ICON_KIND.danger]: {
    backgroundColor: PRIMITIVE_COLORS.red500,
    color: PRIMITIVE_COLORS.gray50,
    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.red600,
      color: PRIMITIVE_COLORS.gray200,
    },
    ":active": {
      backgroundColor: PRIMITIVE_COLORS.red700,
      color: PRIMITIVE_COLORS.gray300,
    },
    ":focus": {
      outlineColor: PRIMITIVE_COLORS.gray50,
    },
    ":disabled": {
      backgroundColor: PRIMITIVE_COLORS.gray800,
      color: PRIMITIVE_COLORS.gray400,
      pointerEvents: "none",
    },
  },
};

const buttonIconSizeModifiedStyle: Record<BUTTON_ICON_SIZE, StyleObject> = {
  [BUTTON_ICON_SIZE.s]: {
    width: "24px",
    height: "24px",
  },
  [BUTTON_ICON_SIZE.m]: {
    width: "32px",
    height: "32px",
  },
  [BUTTON_ICON_SIZE.l]: {
    width: "48px",
    height: "48px",
  },
};

export const getButtonIconStyle = (kind: BUTTON_ICON_KIND, size: BUTTON_ICON_SIZE): StyleObject => {
  return {
    ...buttonIconDefaultStyle,
    ...buttonIconKindModifiedStyle[kind],
    ...buttonIconSizeModifiedStyle[size],
  };
};

export const middleIconStyle: StyleObject = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
