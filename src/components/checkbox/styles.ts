import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";
import { withoutMarginStyles } from "../../shared/styles/withoutMarginStyles";
import { withoutBorderStyles } from "../../shared/styles/borderStyles";

export const getCheckmarkBaseStyles = (isIndeterminate: boolean) => ({
  width: "16px",
  height: "16px",
  boxSizing: "border-box",
  ...withoutBorderStyles,
  ...withoutMarginStyles,
  backgroundSize: isIndeterminate ? "8px" : "9px",
  outline: "none",
  backgroundPositionY: isIndeterminate ? "center" : "4px",
  backgroundPositionX: isIndeterminate ? "center" : "4px",
  ...expandProperty("borderRadius", "2px"),
});

export const checkmarkBaseModifiedStyles = {
  backgroundColor: PRIMITIVE_COLORS.gray700,

  ":hover": {
    backgroundColor: PRIMITIVE_COLORS.gray600,
  },
  ":active": {
    backgroundColor: PRIMITIVE_COLORS.gray500,
  },
};

export const checkmarkCheckedModifiedStyles = {
  backgroundColor: PRIMITIVE_COLORS.gray200,

  ":hover": {
    backgroundColor: PRIMITIVE_COLORS.gray100,
  },
  ":active": {
    backgroundColor: PRIMITIVE_COLORS.gray50,
  },
};

export const getCheckmarkDisabledModifiedStyles = (isChecked: boolean) => {
  const backgroundColor = isChecked ? PRIMITIVE_COLORS.gray700 : PRIMITIVE_COLORS.gray800;

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
