import { FC } from "react";
import Card from "../Card";
import { StyledBody, StyledAction } from "baseui/card";
import { Button } from "../../button";
import { useStyletron } from "baseui";
import { CardProps } from "../types";

type CardStoryWidgetProps = CardProps & {
  isButton?: boolean;
};

const CardStoryWidget: FC<CardStoryWidgetProps> = ({ isButton, ...props }) => {
  const [css] = useStyletron();

  return (
    <Card {...props}>
      <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.
      </StyledBody>
      {isButton && (
        <StyledAction>
          <Button className={css({ width: "100%" })}>Label</Button>
        </StyledAction>
      )}
    </Card>
  );
};

export default CardStoryWidget;
