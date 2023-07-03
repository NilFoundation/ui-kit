import { FC } from "react";
import StatefulTooltip, { StatefulTooltipProps } from "../StatefulTooltip";
import { useStyletron } from "baseui";
import { Button, BUTTON_KIND, BUTTON_SIZE } from "../../button";

const TooltipComponent: FC<Omit<StatefulTooltipProps, "children">> = ({ triggerType, ...props }) => {
  return (
    <StatefulTooltip {...props} triggerType={triggerType} showArrow>
      <span tabIndex={0}>
        <Button kind={BUTTON_KIND.tertiary} size={BUTTON_SIZE.compact}>
          {triggerType === "click" ? "Click me" : "Hover me"}
        </Button>
      </span>
    </StatefulTooltip>
  );
};

const TooltipStoryWidget: FC = ({ ...props }) => {
  const [css] = useStyletron();

  return (
    <ul
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "240px",
        listStyle: "none",
        padding: "0",
      })}
    >
      <li>
        <TooltipComponent {...props} content="StatefulTooltip placement is left" placement="left" />
      </li>
      <li>
        <TooltipComponent {...props} content="StatefulTooltip on click" placement="top" triggerType="click" />
      </li>
      <li>
        <TooltipComponent
          {...props}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          placement="bottom"
        />
      </li>
      <li>
        <TooltipComponent {...props} content="StatefulTooltip placement is bottom" placement="bottom" />
      </li>
      <li>
        <TooltipComponent {...props} content="StatefulTooltip placement is top" placement="top" />
      </li>
      <li>
        <TooltipComponent {...props} content="StatefulTooltip placement is right" placement="right" />
      </li>
    </ul>
  );
};

export default TooltipStoryWidget;
