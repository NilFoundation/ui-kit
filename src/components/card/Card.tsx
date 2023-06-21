import React from "react";
import { Card as BaseCard, CardProps as BaseCardProps } from "baseui/card";

export type CardProps = BaseCardProps;

const Card: React.FC<CardProps> = ({ ...props }) => {
  return <BaseCard {...props} />;
};

export default Card;
