import { useContext, useLayoutEffect, useRef } from "react";
import { SeriesApiRef, SeriesTemplateProps, SeriesType } from "./types";
import { ChartContext } from "../ChartContext";
import { getSeriesDefaultOptions } from "./seriesDefaulOptions";
import { IChartApi, ISeriesApi } from "lightweight-charts";

export const useInitSeries = <T extends SeriesType>({
  type,
  data,
  options,
  reactive,
  markers,
}: Omit<SeriesTemplateProps<T>, "children">) => {
  const chart = useContext(ChartContext);

  if (!chart) {
    throw new Error("Chart context not found");
  }

  const seriesApiRef = useRef<SeriesApiRef<T>>({
    _series: null,
    api() {
      if (!this._series) {
        const chartApi = chart.api();

        if (!chartApi) {
          return null;
        }

        this._series = addSeries(chartApi, type);

        this._series.applyOptions({
          ...getSeriesDefaultOptions(type),
          ...options,
        });

        this._series.setData(data);
      }

      return this._series;
    },
    update(params) {
      const { data: nextData, markers: nextMarkers, reactive: nextReactive, options: nextOptions } = params;
      if (this._series === null) {
        return;
      }

      if (data !== nextData && nextReactive) {
        this._series.setData(nextData);
      }

      if (markers !== nextMarkers && nextMarkers) {
        this._series.setMarkers(nextMarkers);
      }

      if (options !== nextOptions && nextOptions) {
        this._series.applyOptions(nextOptions);
      }
    },
    clear() {
      if (this._series !== null) {
        chart.api()?.removeSeries(this._series);
        this._series = null;
      }
    },
  });

  useLayoutEffect(() => {
    seriesApiRef.current.api();

    return () => {
      seriesApiRef.current.clear();
    };
  }, []);

  useLayoutEffect(() => {
    if (!chart) return;

    seriesApiRef.current?.update({
      data,
      markers,
      reactive,
      options,
    });
  }, [data, markers, reactive, options]);

  return seriesApiRef;
};

const addSeries = <T extends SeriesType>(chart: IChartApi, type: T) => {
  let series = null;

  switch (type) {
    case "Line":
      series = chart.addLineSeries();
      break;
    case "Candlestick":
      series = chart.addCandlestickSeries();
      break;
    case "Histogram":
      series = chart.addHistogramSeries();
      break;
    default:
      throw new Error(`Unknown series type: ${type}`);
  }

  return series as ISeriesApi<T>;
};
