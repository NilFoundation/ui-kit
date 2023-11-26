import type {
  SeriesOptionsCommon,
  HistogramSeriesPartialOptions,
  DeepPartial,
  CandlestickSeriesPartialOptions,
  LineSeriesPartialOptions,
  SeriesType,
} from "lightweight-charts";
import { PRIMITIVE_COLORS } from "../../../shared";

const seriesBaseDefaultOptions: DeepPartial<SeriesOptionsCommon> = {
  priceLineColor: PRIMITIVE_COLORS.blue300,
};

const seriesCandlestickDefaultOptions: CandlestickSeriesPartialOptions = {
  ...seriesBaseDefaultOptions,
  upColor: PRIMITIVE_COLORS.green300,
  downColor: PRIMITIVE_COLORS.red300,
  borderVisible: false,
  wickVisible: true,
  borderColor: PRIMITIVE_COLORS.green300,
  wickColor: PRIMITIVE_COLORS.green300,
  borderUpColor: PRIMITIVE_COLORS.green300,
  borderDownColor: PRIMITIVE_COLORS.red300,
  wickUpColor: PRIMITIVE_COLORS.green300,
  wickDownColor: PRIMITIVE_COLORS.red300,
};

const seriesLineDefaultOptions: LineSeriesPartialOptions = {
  ...seriesBaseDefaultOptions,
  color: PRIMITIVE_COLORS.blue300,
  lineWidth: 2,
  crosshairMarkerVisible: false,
  crosshairMarkerRadius: 0,
  crosshairMarkerBorderColor: PRIMITIVE_COLORS.blue300,
  crosshairMarkerBackgroundColor: PRIMITIVE_COLORS.blue300,
};

const seriesHistogramDefaultOptions: HistogramSeriesPartialOptions = {
  ...seriesBaseDefaultOptions,
  color: PRIMITIVE_COLORS.blue300,
  base: 0,
};

export const getSeriesDefaultOptions = (type: SeriesType) => {
  switch (type) {
    case "Candlestick":
      return seriesCandlestickDefaultOptions;
    case "Line":
      return seriesLineDefaultOptions;
    case "Histogram":
      return seriesHistogramDefaultOptions;
    default:
      return {};
  }
};
