import { FC } from "react";
import { Badge as BaseBadge, BadgeProps as BaseBadgeProps, Hierarchy, SHAPE, COLOR } from "baseui/badge";
import { getBadgeOverrides } from "./overrides";
import { BADGE_COLOR, BADGE_HIERARCHY } from "./types";

export type BadgeProps = Omit<BaseBadgeProps, "hierarchy" | "color" | "shape"> & {
  hierarchy?: BADGE_HIERARCHY;
  color?: BADGE_COLOR;
};

const Badge: FC<BadgeProps> = ({ color = BADGE_COLOR.accent, hierarchy = BADGE_HIERARCHY.high, ...props }) => {
  const overrides = getBadgeOverrides(color, hierarchy);

  return <BaseBadge {...props} overrides={overrides} />;
};

export { SHAPE, COLOR };
export type { Hierarchy };

export default Badge;
