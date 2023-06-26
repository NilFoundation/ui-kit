import { FC, memo } from "react";
import { IconProps } from "./types";
import { getPreparedSvgProps } from "./utils";
import { Svg } from "baseui/icon/styled-components";

const FitToScreenIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);
  return (
    <Svg {...props} {...svgProps} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4H28V28H4V4ZM2 2H4H28H30V4V28V30H28H4H2V28V4V2ZM22 8H16V10H22V16H24V10V8H22ZM10 24H16V22H10L10 16H8V22V24H10Z"
      />
    </Svg>
  );
};

export default memo(FitToScreenIcon);
