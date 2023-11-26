import type {
  ISeriesApi,
  SeriesType as NativeSeriesType,
  SeriesDataItemTypeMap,
  SeriesMarker,
  SeriesOptionsMap,
  Time,
} from "lightweight-charts";
import { ReactNode } from "react";

export type SeriesType = Extract<NativeSeriesType, "Line" | "Candlestick" | "Histogram">;

export type SeriesParameters<T extends SeriesType> = {
  data: SeriesDataItemTypeMap[T][];
  markers?: SeriesMarker<Time>[];
  reactive?: boolean;
  options?: SeriesOptions<T>;
};

export type SeriesTemplateProps<T extends SeriesType> = {
  type: T;
  children?: ReactNode;
} & SeriesParameters<T>;

export type SeriesApiRef<T extends SeriesType> = {
  _series: ISeriesApi<T> | null;
  api: () => ISeriesApi<T> | null;
  update: (p: SeriesParameters<T>) => void;
  clear: () => void;
};

export type SeriesOptions<T extends SeriesType> = SeriesOptionsMap[T];

export type SeriesProps<T extends SeriesType> = Omit<SeriesTemplateProps<T>, "type">;
