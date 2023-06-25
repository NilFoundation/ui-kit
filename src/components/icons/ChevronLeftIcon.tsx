import { FC, memo } from "react";
import { IconProps } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

const ChevronLeftIcon: FC<IconProps> = ({ title, color = PRIMITIVE_COLORS.white, size = "20", className }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      <path d="M10 16L20 6L21.4 7.4L12.8 16L21.4 24.6L20 26L10 16Z" fill={color} />
    </svg>
  );
};

export default memo(ChevronLeftIcon);
