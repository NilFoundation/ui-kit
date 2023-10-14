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
  priceLineColor: PRIMITIVE_COLORS.blue500,
};

const seriesCandlestickDefaultOptions: CandlestickSeriesPartialOptions = {
  ...seriesBaseDefaultOptions,
  upColor: PRIMITIVE_COLORS.green500,
  downColor: PRIMITIVE_COLORS.red500,
  borderVisible: false,
  wickVisible: true,
  borderColor: PRIMITIVE_COLORS.green500,
  wickColor: PRIMITIVE_COLORS.green500,
  borderUpColor: PRIMITIVE_COLORS.green500,
  borderDownColor: PRIMITIVE_COLORS.red500,
  wickUpColor: PRIMITIVE_COLORS.green500,
  wickDownColor: PRIMITIVE_COLORS.red500,
};

const seriesLineDefaultOptions: LineSeriesPartialOptions = {
  ...seriesBaseDefaultOptions,
  color: PRIMITIVE_COLORS.blue500,
  lineWidth: 2,
  crosshairMarkerVisible: false,
  crosshairMarkerRadius: 0,
  crosshairMarkerBorderColor: PRIMITIVE_COLORS.blue500,
  crosshairMarkerBackgroundColor: PRIMITIVE_COLORS.blue500,
};

const seriesHistogramDefaultOptions: HistogramSeriesPartialOptions = {
  ...seriesBaseDefaultOptions,
  color: PRIMITIVE_COLORS.blue500,
  base: 0,
  priceFormat: {
    type: "volume",
  },
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
