import { IconProps } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

export const getPreparedSvgProps = ({
  $size,
  $color,
  color = PRIMITIVE_COLORS.white,
  size = "20",
  ...props
}: IconProps): IconProps => {
  const svgProps = {
    $size: $size ?? size,
    $color: $color ?? color,
  };
  return {
    ...svgProps,
    ...props,
  };
};
