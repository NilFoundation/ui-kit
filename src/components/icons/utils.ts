import { IconProps } from "./types";

export const getPreparedSvgProps = ({ $size, $color, color, size, ...props }: IconProps): IconProps => {
  const svgProps = {
    $size: $size ?? size,
    $color: $color ?? color,
  };
  return {
    ...svgProps,
    ...props,
  };
};
