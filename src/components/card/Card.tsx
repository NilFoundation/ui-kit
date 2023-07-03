import React, { ReactNode } from "react";
import { Card as BaseCard, CardProps as BaseCardProps } from "baseui/card";
import { getCardOverrides } from "./overrides";
import WhiteHeadline from "./ui/WhiteHeadline";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type CardProps = BaseCardProps & {
  /** This property set white headline at the top of the card */
  headline?: boolean;
  /** This property set 1px solid grey border to card */
  border?: boolean;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({
  headline = false,
  border = false,
  children,
  overrides: baseOverrides,
  ...props
}) => {
  const cardOverrides = getCardOverrides(headline, border);
  const overrides = getMergedOverrides(cardOverrides, baseOverrides);

  return (
    <BaseCard {...props} overrides={overrides}>
      {headline && <WhiteHeadline />}
      {children}
    </BaseCard>
  );
};

export default Card;
