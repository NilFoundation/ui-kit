import React from "react";
import { Tooltip as BaseTooltip } from "baseui/tooltip";
import { getTooltipOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { TOOLTIP_KIND, TooltipProps } from "./types";

const Tooltip: React.FC<TooltipProps> = ({ overrides: baseOverrides, kind = TOOLTIP_KIND.DEFAULT, ...props }) => {
  const tooltipOverrides = getTooltipOverrides(kind);
  const overrides = getMergedOverrides(tooltipOverrides, baseOverrides);

  return <BaseTooltip popoverMargin={4} {...props} overrides={overrides} />;
};

export default Tooltip;
