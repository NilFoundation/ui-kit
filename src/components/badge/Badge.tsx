import { FC } from "react";
import { Badge as BaseBadge, BadgeProps as BaseBadgeProps, Hierarchy, SHAPE, COLOR } from "baseui/badge";

export type BadgeProps = BaseBadgeProps;

const Badge: FC<BadgeProps> = ({ ...props }) => {
  return <BaseBadge {...props} />;
};

export { SHAPE, COLOR };
export type { Hierarchy };

export default Badge;
