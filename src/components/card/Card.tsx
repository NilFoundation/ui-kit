import React, { ReactNode } from "react";
import { Card as BaseCard, CardProps as BaseCardProps } from "baseui/card";
import { getCardOverrides } from "./overrides";
import WhiteDash from "./ui/WhiteDash";

export type CardProps = Omit<BaseCardProps, "overrides"> & {
  dash?: boolean;
  border?: boolean;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ dash = false, border = false, children, ...props }) => {
  const overrides = getCardOverrides(dash, border);
  return (
    <BaseCard {...props} overrides={overrides}>
      {dash && <WhiteDash />}
      {children}
    </BaseCard>
  );
};

export default Card;
