import React from "react";
import { StatefulTooltip as BaseStatefulTooltip } from "baseui/tooltip";
import { getTooltipOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { StatefulTooltipProps, TOOLTIP_KIND } from "./types";

const StatefulTooltip: React.FC<StatefulTooltipProps> = ({
  overrides: baseOverrides,
  kind = TOOLTIP_KIND.DEFAULT,
  ...props
}) => {
  const tooltipOverrides = getTooltipOverrides(kind);
  const overrides = getMergedOverrides(tooltipOverrides, baseOverrides);

  return <BaseStatefulTooltip popoverMargin={4} {...props} overrides={overrides} />;
};

export default StatefulTooltip;
