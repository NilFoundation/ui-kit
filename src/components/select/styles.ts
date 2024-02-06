import { SELECT_SIZE } from "./types";
import { expandProperty } from "inline-style-expand-shorthand";
import { withoutBorderStyles} from '../../shared/styles/borderStyles'

const containerCommonStyles = {
  ...expandProperty("borderRadius", "8px"),
  ...withoutBorderStyles,
};

export const controlContainerModifiedStyles = {
  [SELECT_SIZE.small]: {
    ...expandProperty("padding", "3px 12px"),
    ...containerCommonStyles,
    height: "32px",
  },
  [SELECT_SIZE.medium]: {
    ...expandProperty("padding", "10px 16px"),
    ...containerCommonStyles,
    height: "46px",
  },
};

export const valueContainerModifiedStyles = {
  [SELECT_SIZE.small]: {
    top: "3px",
    bottom: "3px",
  },
  [SELECT_SIZE.medium]: {
    top: "10px",
    bottom: "10px",
  },
};

export const selectTypographyStyles = {
  [SELECT_SIZE.small]: {
    fontSize: "12px",
    lineHeight: "16px",
  },
  [SELECT_SIZE.medium]: {
    fontSize: "16px",
    lineHeight: "22px",
  },
};
