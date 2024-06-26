import { COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";
import { withoutMarginStyles } from "../../shared/styles/withoutMarginStyles";
import { withoutBorderStyles } from "../../shared/styles/borderStyles";

export const getCheckmarkBaseStyles = (isIndeterminate: boolean) => ({
  width: "16px",
  height: "16px",
  boxSizing: "border-box",
  ...withoutBorderStyles,
  ...withoutMarginStyles,
  backgroundSize: isIndeterminate ? "8px" : "12px",
  outline: "none",
  backgroundPositionY: isIndeterminate ? "center" : "2px",
  backgroundPositionX: isIndeterminate ? "center" : "2px",
  ...expandProperty("borderRadius", "2px"),
});

export const checkmarkBaseModifiedStyles = {
  backgroundColor: COLORS.gray700,

  ":hover": {
    backgroundColor: COLORS.gray600,
  },
  ":active": {
    backgroundColor: COLORS.gray500,
  },
};

export const checkmarkCheckedModifiedStyles = {
  backgroundColor: COLORS.gray200,

  ":hover": {
    backgroundColor: COLORS.gray100,
  },
  ":active": {
    backgroundColor: COLORS.gray50,
  },
};

export const getCheckmarkDisabledModifiedStyles = (isChecked: boolean) => {
  const backgroundColor = isChecked ? COLORS.gray700 : COLORS.gray800;

  return {
    backgroundColor,

    ":hover": {
      backgroundColor,
    },

    ":active": {
      backgroundColor,
    },
  };
};
