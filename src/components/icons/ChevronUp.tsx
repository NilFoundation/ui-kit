import { FC, memo } from "react";
import { ChevronUp as BaseChevronUp, IconProps } from "baseui/icon";
import { PRIMITIVE_COLORS } from "../../shared";

const Icon: FC<{ color: string }> = ({ color }) => (
  <svg width="12" height="12" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 10L26 20L24.6 21.4L16 12.8L7.4 21.4L6 20L16 10Z" fill={color} />
  </svg>
);

const ChevronUp: FC<IconProps> = ({ color = PRIMITIVE_COLORS.white, ...props }) => {
  return (
    <BaseChevronUp
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

export default memo(ChevronUp);
