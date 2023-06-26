import { FC, memo } from "react";
import { IconProps } from "./types";
import { getPreparedSvgProps } from "./utils";
import { Svg } from "baseui/icon/styled-components";

const ChevronDownIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);
  return (
    <Svg {...props} {...svgProps} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <path d="M16 22.0001L6 12.0001L7.4 10.6001L16 19.2001L24.6 10.6001L26 12.0001L16 22.0001Z" />
    </Svg>
  );
};

export default memo(ChevronDownIcon);
