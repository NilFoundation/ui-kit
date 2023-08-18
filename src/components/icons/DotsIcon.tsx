import { FC, memo } from "react";
import { IconProps } from "./types";
import { getPreparedSvgProps } from "./utils";
import { Svg } from "baseui/icon/styled-components";

const DiscordIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);
  return (
    <Svg {...svgProps} {...props} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <rect width="8" height="8" fill="#212121" />
      <rect x="6" y="2" width="2" height="2" fill="#808080" />
      <rect x="2" y="6" width="2" height="2" fill="#808080" />
    </Svg>
  );
};

export default memo(DiscordIcon);
