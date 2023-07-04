import React from "react";
import {
  StatefulTooltip as BaseStatefulTooltip,
  StatefulTooltipProps as BaseStatefulTooltipProps,
} from "baseui/tooltip";
import { getTooltipOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type StatefulTooltipProps = BaseStatefulTooltipProps;

const StatefulTooltip: React.FC<StatefulTooltipProps> = ({ overrides: baseOverrides, ...props }) => {
  const tooltipOverrides = getTooltipOverrides();
  const overrides = getMergedOverrides(tooltipOverrides, baseOverrides);

  return <BaseStatefulTooltip popoverMargin={16} {...props} overrides={overrides} />;
};

export default StatefulTooltip;
