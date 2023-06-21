import React from "react";
import { StatefulTooltip, StatefulTooltipProps } from "baseui/tooltip";

export type TooltipProps = StatefulTooltipProps;

const Tooltip: React.FC<TooltipProps> = ({ ...props }) => {
  return <StatefulTooltip popoverMargin={8} {...props} />;
};

export default Tooltip;
