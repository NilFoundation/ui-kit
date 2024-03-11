import { CustomSeriesOptions, HistogramData, Time, WhitespaceData } from "lightweight-charts";

export type CustomHistogramSeriesData = HistogramData<Time> | WhitespaceData<Time>;

export interface CustomHistogramSeriesOptions extends CustomSeriesOptions {
  barGap?: number;
}
