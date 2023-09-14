import { FC, memo } from "react";
import { IconProps } from "./types";
import { getPreparedSvgProps } from "./utils";
import { Svg } from "baseui/icon/styled-components";

const CopyIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);
  return (
    <Svg {...props} {...svgProps} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <path fillRule="evenodd" clipRule="evenodd" d="M11 5H2V14H11V5ZM1 4V15H12V4H1Z" fill="#C8C8C8" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 1H15V11H11.8V10H14V2H6V4.2H5V1Z" fill="#C8C8C8" />
    </Svg>
  );
};

export default memo(CopyIcon);
