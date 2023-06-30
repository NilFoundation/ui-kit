import React from "react";
import { StatefulTooltip, StatefulTooltipProps } from "baseui/tooltip";
import { getTooltipOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type TooltipProps = StatefulTooltipProps;

const Tooltip: React.FC<TooltipProps> = ({ overrides: baseOverrides, ...props }) => {
  const tooltipOverrides = getTooltipOverrides();
  const overrides = getMergedOverrides(tooltipOverrides, baseOverrides);

  return <StatefulTooltip popoverMargin={16} {...props} overrides={overrides} />;
};

export default Tooltip;
