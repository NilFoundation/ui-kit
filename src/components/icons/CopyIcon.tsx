import { FC, memo } from "react";
import { IconProps } from "./types";
import { getPreparedSvgProps } from "./utils";
import { Svg } from "baseui/icon/styled-components";
import { PRIMITIVE_COLORS } from "../../shared";

const CopyIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);
  return (
    <Svg {...props} {...svgProps} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.375 5.625H2.25V15.75H12.375V5.625ZM1.125 4.5V16.875H13.5V4.5H1.125Z"
        fill={PRIMITIVE_COLORS.gray50}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.625 1.125H16.875V12.375H13.275V11.25H15.75V2.25H6.75V4.725H5.625V1.125Z"
        fill={PRIMITIVE_COLORS.gray50}
      />
    </Svg>
  );
};

export default memo(CopyIcon);
