import type {
  ChartOptions as ChartNativeOptions,
  DeepPartial,
  IChartApi,
  MouseEventHandler,
  Time,
} from "lightweight-charts";
import { ForwardRefExoticComponent, ForwardedRef, ReactNode } from "react";
import { CandlestickSeries, HistogramSeries, LineSeries } from "./series";

export type ChartOptions = {
  onClick?: MouseEventHandler<Time>;
  onCrosshairMove?: MouseEventHandler<Time>;
} & DeepPartial<ChartNativeOptions>;

export type ChartProps = {
  children: ReactNode;
  className?: string;
  legend?: ReactNode;
} & ChartOptions;

export type Chart = {
  LineSeries?: typeof LineSeries;
  HistogramSeries?: typeof HistogramSeries;
  CandlestickSeries?: typeof CandlestickSeries;
} & ForwardRefExoticComponent<ChartProps & ForwardedRef<HTMLDivElement>>;

export type ChartApiRef = {
  _chart: IChartApi | null;
  api: () => IChartApi | null;
  update: (options: ChartOptions) => void;
  clear: () => void;
};
