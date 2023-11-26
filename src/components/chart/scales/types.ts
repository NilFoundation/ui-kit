import type {
  DeepPartial,
  IPriceScaleApi,
  ITimeScaleApi,
  LogicalRangeChangeEventHandler,
  Range,
  SizeChangeEventHandler,
  Time,
  TimeRangeChangeEventHandler,
  TimeScaleOptions as TimeScaleNativeOptions,
  PriceScaleOptions as PriceScaleNativeOptions,
} from "lightweight-charts";

export type TimeScaleOptions = DeepPartial<TimeScaleNativeOptions>;
export type PriceScaleOptions = DeepPartial<PriceScaleNativeOptions>;

export type TimeScaleApiRef = {
  _timeScale: ITimeScaleApi<Time> | null;
  api: () => ITimeScaleApi<Time> | null;
  update: (p: TimeScaleProps) => void;
  clear: () => void;
};

export type PriceScaleApiRef = {
  _priceScale: IPriceScaleApi | null;
  api: () => IPriceScaleApi | null;
  update: (p: PriceScaleProps) => void;
  clear: () => void;
};

export type TimeScaleProps = {
  onVisibleTimeRangeChange?: TimeRangeChangeEventHandler<Time>;
  onVisibleLogicalRangeChange?: LogicalRangeChangeEventHandler;
  onSizeChange?: SizeChangeEventHandler;
  fitContent?: boolean;
  initialVisibleRange?: Range<Time>;
  options?: TimeScaleOptions;
};

export type PriceScaleProps = {
  options?: PriceScaleOptions;
  id: string;
};
