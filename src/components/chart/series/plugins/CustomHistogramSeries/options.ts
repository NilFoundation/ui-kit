import { customSeriesDefaultOptions } from "lightweight-charts";
import { CustomHistogramSeriesOptions } from "./types";

export const defaultOptions: CustomHistogramSeriesOptions = {
  ...customSeriesDefaultOptions,
  lastValueVisible: false,
  priceLineVisible: false,
  barGap: 4,
} as const;
