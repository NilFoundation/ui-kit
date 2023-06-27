import React from "react";
import { StatefulTooltip, StatefulTooltipProps } from "baseui/tooltip";
import { getTooltipOverrides } from "./overrides";

export type TooltipProps = StatefulTooltipProps;

const Tooltip: React.FC<TooltipProps> = ({ ...props }) => {
  const overrides = getTooltipOverrides();

  return <StatefulTooltip popoverMargin={16} {...props} overrides={overrides} />;
};

export default Tooltip;
