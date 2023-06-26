import { FC, memo } from "react";
import { IconProps } from "./types";
import { getPreparedSvgProps } from "./utils";
import { Svg } from "baseui/icon/styled-components";

const MenuIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);

  return (
    <Svg {...props} {...svgProps} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4H4V12H12V4ZM12 20H4V28H12V20ZM20 4H28V12H20V4ZM28 20H20V28H28V20Z"
      />
    </Svg>
  );
};

export default memo(MenuIcon);
