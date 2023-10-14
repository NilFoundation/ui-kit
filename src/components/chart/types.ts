import type { IChartApi } from "lightweight-charts";

export type ChartApiRef = {
  _chart: IChartApi | null;
  api: () => IChartApi | null;
  clear: () => void;
};
