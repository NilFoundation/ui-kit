import React, { ReactNode } from "react";
import { Card as BaseCard, CardProps as BaseCardProps } from "baseui/card";
import { getCardOverrides } from "./overrides";
import WhiteDash from "./ui/WhiteDash";
import { Button } from "../button";
import { useStyletron } from "baseui";

export type CardProps = BaseCardProps & {
  dash?: boolean;
  border?: boolean;
  children: ReactNode;
  button?: string;
};

const Card: React.FC<CardProps> = ({ dash = false, border = false, button = false, children, ...props }) => {
  const overrides = getCardOverrides(dash, border);
  const [css] = useStyletron();
  return (
    <BaseCard {...props} overrides={overrides}>
      {dash && <WhiteDash />}
      {children}
      {button && <Button className={css({ width: "100%" })}>{button}</Button>}
    </BaseCard>
  );
};

export default Card;
