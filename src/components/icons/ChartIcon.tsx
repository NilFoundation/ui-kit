import { FC, memo } from "react";
import { IconProps } from "./types";
import { getPreparedSvgProps } from "./utils";
import { Svg } from "baseui/icon/styled-components";

const ChartIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);
  return (
    <Svg {...props} {...svgProps} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <g clipPath="url(#clip0_22524_263333)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 4H12V28H4V4ZM2 2H4H12H14V4V28V30H12H4H2V28V4V2ZM20 14H28V28H20V14ZM18 12H20H28H30V14V28V30H28H20H18V28V14V12Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_22524_263333">
          <rect width="32" height="32" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default memo(ChartIcon);
