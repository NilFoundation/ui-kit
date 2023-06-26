import { FC, memo } from "react";
import { IconProps } from "./types";
import { getPreparedSvgProps } from "./utils";
import { Svg } from "baseui/icon/styled-components";

const LogoutIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);
  return (
    <Svg {...props} {...svgProps} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 30H26H28V28V4V2H26H14H12V4V7H14V4H26V28H14V25H12V28V30H14ZM18.17 17L14.59 20.59L16 22L22 16L16 10L14.59 11.41L18.17 15H4V17H18.17Z"
      />
    </Svg>
  );
};

export default memo(LogoutIcon);
