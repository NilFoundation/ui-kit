import { FC, memo } from "react";
import { IconProps } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

const CodeIcon: FC<IconProps> = ({ title, color = PRIMITIVE_COLORS.white, size = "20", className }) => {
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
      <g clipPath="url(#clip0_22524_263332)">
        <path d="M31.0001 16L24.0001 23L22.5901 21.59L28.1701 16L22.5901 10.41L24.0001 9L31.0001 16Z" fill={color} />
        <path d="M1 16L8 9L9.41 10.41L3.83 16L9.41 21.59L8 23L1 16Z" fill={color} />
        <path d="M17.6388 6.00095L12.4185 25.4837L14.3503 26.0013L19.5707 6.51859L17.6388 6.00095Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_22524_263332">
          <rect width="32" height="32" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default memo(CodeIcon);
