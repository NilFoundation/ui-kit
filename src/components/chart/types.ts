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
} & DeepPartial<ChartNativeOptions>;

export type ChartProps = {
  children?: ReactNode;
  className?: string;
  autoResize?: boolean;
} & ChartOptions;

export type ChartApiRef = {
  _chart: IChartApi | null;
  api: () => IChartApi | null;
  update: (options: ChartOptions) => void;
  clear: () => void;
};
