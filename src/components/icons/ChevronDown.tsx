import { FC, memo } from "react";
import { ChevronDown as BaseChevronDown, IconProps } from "baseui/icon";
import { PRIMITIVE_COLORS } from "../../shared";

const Icon: FC<{ color: string }> = ({ color }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8.2501L2.25 4.5001L2.775 3.9751L6 7.2001L9.225 3.9751L9.75 4.5001L6 8.2501Z" fill={color} />
  </svg>
);

const ChevronDown: FC<IconProps> = ({ color = PRIMITIVE_COLORS.white, ...props }) => {
  return (
    <BaseChevronDown
      {...props}
      overrides={{
        Svg: {
          component: Icon,
          props: {
            color,
          },
        },
      }}
    />
  );
};

export default memo(ChevronDown);
