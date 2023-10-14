import type { ISeriesApi, SeriesType } from "lightweight-charts";

export type SeriesApiRef<T extends SeriesType = any> = {
  _series: ISeriesApi<T> | null;
  api: () => ISeriesApi<T> | null;
  clear: () => void;
};
