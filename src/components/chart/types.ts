import type {
  ChartOptions as ChartNativeOptions,
  DeepPartial,
  IChartApi,
  MouseEventHandler,
  Time,
} from "lightweight-charts";
import { ReactNode } from "react";

export type ChartOptions = {
  onClick?: MouseEventHandler<Time>;
  onCrosshairMove?: MouseEventHandler<Time>;
  onInit?: (chart: IChartApi) => void;
} & DeepPartial<ChartNativeOptions>;

export type ChartProps = {
  children?: ReactNode;
  className?: string;
} & ChartOptions;

export type ChartApiRef = {
  _chart: IChartApi | null;
  api: () => IChartApi | null;
  clear: () => void;
};
