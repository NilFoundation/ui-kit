import { withoutBorderStyles } from "../../shared/styles/borderStyles";
import { PRIMITIVE_COLORS } from "../../shared";

export const tooltipBodyStyles = {
  ...withoutBorderStyles,
  backgroundColor: PRIMITIVE_COLORS.gray700,
  maxWidth: "216px",
};

export const tooltipInnerStyles = {
  backgroundColor: PRIMITIVE_COLORS.gray700,
  color: PRIMITIVE_COLORS.white,
  textAlign: "center",
  lineHeight: "20px",
};

export const tooltipArrowStyles = {
  backgroundColor: PRIMITIVE_COLORS.gray700,
};
