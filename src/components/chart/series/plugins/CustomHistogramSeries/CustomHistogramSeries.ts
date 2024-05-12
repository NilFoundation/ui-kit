import {
  CustomSeriesPricePlotValues,
  HistogramData,
  ICustomSeriesPaneView,
  PaneRendererCustomData,
  Time,
  WhitespaceData,
} from "lightweight-charts";
import { defaultOptions } from "./options";
import { CustomHistogramRenderer } from "./renderer";
import { CustomHistogramSeriesData, CustomHistogramSeriesOptions } from "./types";

export class CustomHistogramSeries implements ICustomSeriesPaneView {
  _renderer: CustomHistogramRenderer;

  constructor() {
    this._renderer = new CustomHistogramRenderer();
  }

  priceValueBuilder(plotRow: CustomHistogramSeriesData): CustomSeriesPricePlotValues {
    const midPoint = plotRow.value / 2;
    //* The values returned here are used for the autoscaling behaviour on the chart,
    //* and the last value is also used as the price value for the crosshair and price label.
    return [plotRow.low, plotRow.high, midPoint];
  }

  isWhitespace(data: CustomHistogramSeriesData): data is WhitespaceData {
    return (data as Partial<HistogramData<Time>>).value === undefined;
  }

  renderer(): CustomHistogramRenderer {
    return this._renderer;
  }

  update(data: PaneRendererCustomData<Time, CustomHistogramSeriesData>, options: CustomHistogramSeriesOptions): void {
    this._renderer.update(data, options);
  }

  defaultOptions() {
    return defaultOptions;
  }

  destroy(): void {}
}
