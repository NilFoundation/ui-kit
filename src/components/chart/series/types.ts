import type {
  ISeriesApi,
  SeriesType as NativeSeriesType,
  SeriesDataItemTypeMap,
  SeriesMarker,
  SeriesOptionsMap,
  Time,
} from "lightweight-charts";
import { ReactNode } from "react";

export type SeriesTemplateProps<T extends SeriesType> = {
  type: T;
  children?: ReactNode;
  data: SeriesDataItemTypeMap[T][];
  options: SeriesOptions<T>;
  reactive?: boolean;
  markers?: SeriesMarker<Time>[];
};

export type SeriesType = Extract<NativeSeriesType, "Line" | "Candlestick" | "Histogram">;

export type SeriesApiRef<T extends SeriesType> = {
  _series: ISeriesApi<T> | null;
  api: () => ISeriesApi<T> | null;
  update: (options: SeriesOptions<T>) => void;
  clear: () => void;
};

export type SeriesOptions<T extends SeriesType> = SeriesOptionsMap[T];

export type SeriesProps<T extends SeriesType> = Omit<SeriesTemplateProps<T>, "type">;
