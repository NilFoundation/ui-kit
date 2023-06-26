import { FC, memo } from "react";
import { IconProps } from "./types";
import { Svg } from "baseui/icon/styled-components";
import { getPreparedSvgProps } from "./utils";

const CloseIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);
  return (
    <Svg {...props} {...svgProps} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <path d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4L14.6 16L8 22.6L9.4 24L16 17.4L22.6 24L24 22.6L17.4 16L24 9.4Z" />
    </Svg>
  );
};

export default memo(CloseIcon);
