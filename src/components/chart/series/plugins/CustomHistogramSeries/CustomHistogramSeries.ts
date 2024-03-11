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

  priceValueBuilder(data: CustomHistogramSeriesData): CustomSeriesPricePlotValues {
    
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
