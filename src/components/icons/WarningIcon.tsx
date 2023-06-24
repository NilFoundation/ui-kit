import { FC, memo } from "react";
import { IconProps } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

const WarningIcon: FC<IconProps> = ({ title, color = PRIMITIVE_COLORS.white, size = "20", className }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      <path
        d="M10.3138 3.625H10.3112L3.125 17.3729L3.1262 17.375H17.4988L17.5 17.3729L10.3138 3.625ZM9.60016 7.29648H11.0248V12.9656H9.60016V7.29648ZM10.3125 16.1152C10.1247 16.1152 9.94102 16.0598 9.78483 15.9559C9.62864 15.8521 9.5069 15.7046 9.43502 15.5319C9.36313 15.3593 9.34432 15.1693 9.38097 14.986C9.41762 14.8027 9.50807 14.6343 9.6409 14.5022C9.77373 14.3701 9.94297 14.2801 10.1272 14.2436C10.3114 14.2072 10.5024 14.2259 10.676 14.2974C10.8495 14.3689 10.9979 14.49 11.1022 14.6454C11.2066 14.8008 11.2623 14.9834 11.2623 15.1703C11.2623 15.4209 11.1622 15.6612 10.9841 15.8384C10.806 16.0156 10.5644 16.1152 10.3125 16.1152Z"
        fill={color}
      />
    </svg>
  );
};

export default memo(WarningIcon);
