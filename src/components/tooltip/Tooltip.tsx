import React from "react";
import { Tooltip as BaseTooltip, TooltipProps as BaseTooltipProps } from "baseui/tooltip";
import { getTooltipOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { TOOLTIP_KIND, TooltipCommonProps } from "./types";

export type TooltipProps = BaseTooltipProps & TooltipCommonProps;

const Tooltip: React.FC<TooltipProps> = ({ overrides: baseOverrides, kind = TOOLTIP_KIND.DEFAULT, ...props }) => {
  const tooltipOverrides = getTooltipOverrides(kind);
  const overrides = getMergedOverrides(tooltipOverrides, baseOverrides);

  return <BaseTooltip popoverMargin={16} {...props} overrides={overrides} />;
};

export default Tooltip;
