import { BorderRadiusStyles } from "../../shared/styles/border";
import { PRIMITIVE_COLORS } from "../../shared";

export const tooltipBodyStyles = {
  ...BorderRadiusStyles,
  backgroundColor: PRIMITIVE_COLORS.primary700,
  maxWidth: "216px",
};

export const tooltipInnerStyles = {
  backgroundColor: PRIMITIVE_COLORS.primary700,
  color: PRIMITIVE_COLORS.white,
  textAlign: "center",
  lineHeight: "20px",
};

export const tooltipArrowStyles = {
  backgroundColor: PRIMITIVE_COLORS.primary700,
};
