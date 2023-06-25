import { FC, memo } from "react";
import { IconProps } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

const ChevronDownIcon: FC<IconProps> = ({ title, color = PRIMITIVE_COLORS.white, size = "20", className }) => {
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
      <path d="M16 22.0001L6 12.0001L7.4 10.6001L16 19.2001L24.6 10.6001L26 12.0001L16 22.0001Z" fill={color} />
    </svg>
  );
};

export default memo(ChevronDownIcon);
