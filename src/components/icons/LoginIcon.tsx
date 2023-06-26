import { FC, memo } from "react";
import { IconProps } from "./types";
import { getPreparedSvgProps } from "./utils";
import { Svg } from "baseui/icon/styled-components";

const LoginIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);
  return (
    <Svg {...props} {...svgProps} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 30H6C5.46976 29.9994 4 30 4 30C4 30 4.00061 28.5303 4 28V4C4.00061 3.46976 4 2 4 2C4 2 5.46976 2.00061 6 2H18C18.5302 2.00061 20 2 20 2C20 2 19.9994 3.46976 20 4V7H18V4H6V28H18V25H20V28C19.9994 28.5303 20 30 20 30C20 30 18.5302 29.9994 18 30ZM24.172 17L20.586 20.586L22 22L28 16L22 10L20.586 11.414L24.172 15H10V17H24.172Z"
      />
    </Svg>
  );
};

export default memo(LoginIcon);
