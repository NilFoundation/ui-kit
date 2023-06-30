import React, { ReactNode } from "react";
import { Card as BaseCard, CardProps as BaseCardProps } from "baseui/card";
import { getCardOverrides } from "./overrides";
import WhiteDash from "./ui/WhiteDash";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type CardProps = BaseCardProps & {
  dash?: boolean;
  border?: boolean;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ dash = false, border = false, children, overrides: baseOverrides, ...props }) => {
  const cardOverrides = getCardOverrides(dash, border);
  const overrides = getMergedOverrides(cardOverrides, baseOverrides);

  return (
    <BaseCard {...props} overrides={overrides}>
      {dash && <WhiteDash />}
      {children}
    </BaseCard>
  );
};

export default Card;
