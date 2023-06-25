import { FC, memo } from "react";
import { IconProps } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

const ResizeIcon: FC<IconProps> = ({ title, color = PRIMITIVE_COLORS.white, size = "20", className }) => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.0002 18.0079V14.8359L14.8359 30.0002H18.0079L30.0002 18.0079ZM20.8363 30.0002L30.0002 20.8363V24.0079L24.0079 30.0002H20.8363ZM26.8363 30.0002H30.0002V26.8363L26.8363 30.0002Z"
        fill={color}
      />
    </svg>
  );
};

export default memo(ResizeIcon);
