import { FC, memo } from "react";
import { IconProps } from "./types";
import { Svg } from "baseui/icon/styled-components";
import { getPreparedSvgProps } from "./utils";

const ChevronUpIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);
  return (
    <Svg {...props} {...svgProps} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <path d="M16 10L26 20L24.6 21.4L16 12.8L7.4 21.4L6 20L16 10Z" />
    </Svg>
  );
};

export default memo(ChevronUpIcon);
