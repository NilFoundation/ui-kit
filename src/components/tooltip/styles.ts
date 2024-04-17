import { withoutBorderStyles } from "../../shared/styles/borderStyles";
import { COLORS } from "../../shared";

export const tooltipBodyStyles = {
  ...withoutBorderStyles,
  backgroundColor: COLORS.gray700,
  maxWidth: "216px",
};

export const tooltipInnerStyles = {
  backgroundColor: COLORS.gray700,
  color: COLORS.white,
  textAlign: "center",
  lineHeight: "20px",
};

export const tooltipArrowStyles = {
  backgroundColor: COLORS.gray700,
};
