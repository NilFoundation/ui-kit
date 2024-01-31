import { TooltipProps as BaseTooltipProps, StatefulTooltipProps as BaseStatefulTooltipProps } from "baseui/tooltip";

export enum TOOLTIP_KIND {
  DEFAULT = "default",
  ERROR = "error",
  SUCCESS = "success",
}

export type TooltipCommonProps = {
  kind?: TOOLTIP_KIND;
};

export type TooltipProps = BaseTooltipProps & TooltipCommonProps;

export type StatefulTooltipProps = BaseStatefulTooltipProps & TooltipCommonProps;
