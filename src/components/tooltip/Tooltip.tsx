import React from "react";
import { Tooltip as BaseTooltip, TooltipProps as BaseTooltipProps } from "baseui/tooltip";
import { getTooltipOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type TooltipProps = BaseTooltipProps;

const Tooltip: React.FC<TooltipProps> = ({ overrides: baseOverrides, ...props }) => {
  const tooltipOverrides = getTooltipOverrides();
  const overrides = getMergedOverrides(tooltipOverrides, baseOverrides);

  return <BaseTooltip popoverMargin={16} {...props} overrides={overrides} />;
};

export default Tooltip;
