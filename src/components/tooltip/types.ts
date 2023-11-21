export const enum TOOLTIP_KIND {
  DEFAULT = "default",
  ERROR = "error",
  SUCCESS = "success",
}

export type TooltipCommonProps = {
  kind?: TOOLTIP_KIND;
};
