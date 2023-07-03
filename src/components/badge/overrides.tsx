import { BadgeOverrides } from "baseui/badge";
import { BADGE_COLOR, BADGE_HIERARCHY } from "./types";
import { badgeBaseStyles, badgeColorModifiedStyles, badgeLowStyles } from "./styles";

export const getBadgeOverrides = (color: BADGE_COLOR, hierarchy: BADGE_HIERARCHY): BadgeOverrides => {
  return {
    Badge: {
      style: {
        ...badgeBaseStyles,
        ...badgeColorModifiedStyles[color],
        ...(hierarchy === BADGE_HIERARCHY.low ? badgeLowStyles[color] : {}),
      },
    },
  };
};
