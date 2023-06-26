import { FC, memo } from "react";
import { IconProps } from "./types";
import { getPreparedSvgProps } from "./utils";
import { Svg } from "baseui/icon/styled-components";

const ChevronRightIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);
  return (
    <Svg {...props} {...svgProps} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <path d="M22.0001 16L12.0001 26L10.6001 24.6L19.2001 16L10.6001 7.4L12.0001 6L22.0001 16Z" />
    </Svg>
  );
};

export default memo(ChevronRightIcon);
