import { SELECT_SIZE } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

export const controlContainerModifiedStyles = {
  [SELECT_SIZE.small]: {
    paddingTop: "8px",
    paddingRight: "16px",
    paddingBottom: "8px",
    paddingLeft: "16px",
  },
  [SELECT_SIZE.medium]: {
    paddingTop: "12px",
    paddingRight: "16px",
    paddingBottom: "12px",
    paddingLeft: "16px",
  },
  [SELECT_SIZE.large]: {
    paddingTop: "14px",
    paddingRight: "16px",
    paddingBottom: "14px",
    paddingLeft: "16px",
  },
};

export const controlContainerDisabledStyles = {
  backgroundColor: "transparent",
  border: `2px solid ${PRIMITIVE_COLORS.mono600}`,
};

export const typographyModifiedStyles = {
  [SELECT_SIZE.small]: {
    fontSize: "14px",
  },
  [SELECT_SIZE.medium]: {
    fontSize: "16px",
  },
  [SELECT_SIZE.large]: {
    fontSize: "18px",
  },
};
