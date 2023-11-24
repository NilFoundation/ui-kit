import React from "react";
import {
  StatefulTooltip as BaseStatefulTooltip,
  StatefulTooltipProps as BaseStatefulTooltipProps,
} from "baseui/tooltip";
import { getTooltipOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { TOOLTIP_KIND, TooltipCommonProps } from "./types";

export type StatefulTooltipProps = BaseStatefulTooltipProps & TooltipCommonProps;

const StatefulTooltip: React.FC<StatefulTooltipProps> = ({
  overrides: baseOverrides,
  kind = TOOLTIP_KIND.DEFAULT,
  ...props
}) => {
  const tooltipOverrides = getTooltipOverrides(kind);
  const overrides = getMergedOverrides(tooltipOverrides, baseOverrides);

  return <BaseStatefulTooltip popoverMargin={16} {...props} overrides={overrides} />;
};

export default StatefulTooltip;
