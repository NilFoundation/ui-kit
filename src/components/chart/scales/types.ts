import type {
  DeepPartial,
  IPriceScaleApi,
  ISeriesApi,
  ITimeScaleApi,
  LogicalRangeChangeEventHandler,
  Range,
  SizeChangeEventHandler,
  Time,
  TimeRangeChangeEventHandler,
  TimeScaleOptions as TimeScaleNativeOptions,
  PriceScaleOptions as PriceScaleNativeOptions,
} from "lightweight-charts";
import { SeriesType } from "../series";

export type TimeScaleOptions = DeepPartial<TimeScaleNativeOptions>;
export type PriceScaleOptions = DeepPartial<PriceScaleNativeOptions>;

export type TimeScaleApiRef<T extends SeriesType> = {
  _timeScale: ITimeScaleApi<T> | null;
  api: () => ISeriesApi<T> | null;
  update: (p: any) => void;
  clear: () => void;
};

export type PriceScaleApiRef = {
  _timeScale: IPriceScaleApi | null;
  api: () => IPriceScaleApi | null;
  update: (p: any) => void;
  clear: () => void;
};

export type TimeScaleProps = {
  onVisibleTimeRangeChange?: TimeRangeChangeEventHandler<any>;
  onVisibleLogicalRangeChange?: LogicalRangeChangeEventHandler;
  onSizeChange?: SizeChangeEventHandler;
  fitContent?: boolean;
  initialVisibleRange?: Range<Time>;
  options?: TimeScaleOptions;
};

export type PriceScaleProps = {
  onVisibleLogicalRangeChange?: LogicalRangeChangeEventHandler;
  onSizeChange?: SizeChangeEventHandler;
  options?: PriceScaleOptions;
};
