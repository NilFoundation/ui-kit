import { FC } from "react";
import Tooltip, { TooltipProps } from "../Tooltip";
import { useStyletron } from "baseui";
import { Button, BUTTON_KIND, BUTTON_SIZE } from "../../button";

const TooltipComponent: FC<Omit<TooltipProps, "children">> = ({ triggerType, ...props }) => {
  return (
    <Tooltip {...props} triggerType={triggerType} showArrow>
      <span tabIndex={0}>
        <Button kind={BUTTON_KIND.tertiary} size={BUTTON_SIZE.compact}>
          {triggerType === "click" ? "Click me" : "Hover me"}
        </Button>
      </span>
    </Tooltip>
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
        <TooltipComponent {...props} content="Tooltip placement is left" placement="left" />
      </li>
      <li>
        <TooltipComponent {...props} content="Tooltip on click" placement="top" triggerType="click" />
      </li>
      <li>
        <TooltipComponent
          {...props}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          placement="bottom"
        />
      </li>
      <li>
        <TooltipComponent {...props} content="Tooltip placement is bottom" placement="bottom" />
      </li>
      <li>
        <TooltipComponent {...props} content="Tooltip placement is top" placement="top" />
      </li>
      <li>
        <TooltipComponent {...props} content="Tooltip placement is right" placement="right" />
      </li>
    </ul>
  );
};

export default TooltipStoryWidget;
