import React from "react";
import { Card as BaseCard } from "baseui/card";
import { getCardOverrides } from "./overrides";
import WhiteHeadline from "./ui/WhiteHeadline";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { CardProps } from "./types";

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
