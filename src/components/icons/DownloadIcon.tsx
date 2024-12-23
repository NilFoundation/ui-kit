import { FC } from "react";
import { IconProps } from "./types";
import { getPreparedSvgProps } from "./utils";
import { Svg } from "baseui/icon/styled-components";
import { COLORS } from "../../shared";

const DownloadIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);
  return (
    <Svg {...props} {...svgProps} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <path
        fill="none"
        d="M2 11.0014V14H14V11"
        stroke={COLORS.gray50}
        strokeWidth="1.33333"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M11 6.66675L8 9.66675L5 6.66675"
        stroke={COLORS.gray50}
        strokeWidth="1.33333"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M8 3L7.99967 9"
        stroke={COLORS.gray50}
        strokeWidth="1.33333"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default DownloadIcon;
