export const enum TOOLTIP_KIND {
  DEFAULT = "default",
  ERROR = "error",
  SUCCESS = "success",
}

export type TooltipCommonProps = {
  /** @default TOOLTIP_KIND.DEFAULT */
  kind?: TOOLTIP_KIND;
};
