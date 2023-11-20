import { useContext, useRef } from "react";
import type { SeriesType } from "lightweight-charts";
import { SeriesApiRef } from "./types";
import { ChartContext } from "../ChartContext";

const seriesTypeMap = {
  Line: "addLineSeries",
  Candlestick: "addCandlestickSeries",
  Bar: "addBarSeries",
} satisfies Partial<Record<SeriesType, string>>;

export const useInitSeries = () => {
  const chart = useContext(ChartContext);

  if (!chart) {
    throw new Error("Chart context found");
  }

  const seriesApiRef = useRef<SeriesApiRef>({
    _series: null,
    api() {
      if (!this._series) {
        this._series = type === "line" ? parent.api().addLineSeries(rest) : parent.api().addAreaSeries(rest);
        this._series.setData(data);
      }
      return this._api;
    },
    update(options: SeriesOptions) {
      if (this._api) {
        this._api.applyOptions(options);
      }
    },
    free() {
      if (this._api) {
        parent.free();
      }
    },
  });

  return seriesApiRef;
};
