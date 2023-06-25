import { FC, memo } from "react";
import { IconProps } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

const HeartIcon: FC<IconProps> = ({ title, color = PRIMITIVE_COLORS.white, size = "20", className }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      <path
        d="M14.5625 2.5C13.3125 2.5 12.125 3 11.25 3.875L10.5 4.625L9.8125 3.9375C8 2.0625 5 2.0625 3.1875 3.875L3.125 3.9375C1.25 5.8125 1.25 8.8125 3.125 10.6875L10.5 18.125L17.875 10.6875C19.75 8.8125 19.75 5.8125 17.875 3.9375C17 3 15.8125 2.5 14.5625 2.5Z"
        fill={color}
      />
    </svg>
  );
};

export default memo(HeartIcon);
