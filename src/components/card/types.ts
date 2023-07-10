import { CardProps as BaseCardProps } from "baseui/card/types";
import { CardOverrides } from "baseui/card";

export type CardProps = Omit<BaseCardProps, "overrides"> & {
  /** This property set white headline at the top of the card */
  headline?: boolean;
  /** This property set 1px solid grey border to card */
  border?: boolean;
  overrides?: CardOverrides;
};
