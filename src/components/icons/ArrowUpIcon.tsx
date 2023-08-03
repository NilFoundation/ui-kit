import { FC, memo } from "react";
import { IconProps } from "./types";
import { getPreparedSvgProps } from "./utils";
import { Svg } from "baseui/icon/styled-components";

const ArrowUpIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);
  return (
    <Svg {...props} {...svgProps} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <path d="M10.9624 4.45844L10.9624 18.6345L8.63348 18.6345L8.63266 4.45926L2.38628 10.7056L0.739248 9.0586L9.79793 -8.1379e-05L18.8566 9.0586L17.2096 10.7056L10.9624 4.45844Z" />
    </Svg>
  );
};

export default memo(ArrowUpIcon);
