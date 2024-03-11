import { BitmapCoordinatesRenderingScope, CanvasRenderingTarget2D } from "fancy-canvas";
import {
  ICustomSeriesPaneRenderer,
  PaneRendererCustomData,
  PriceToCoordinateConverter,
  Time,
} from "lightweight-charts";
import { CustomHistogramSeriesData, CustomHistogramSeriesOptions } from "./types";

export class CustomHistogramRenderer implements ICustomSeriesPaneRenderer {
  _data: PaneRendererCustomData<Time, CustomHistogramSeriesData> | null = null;
  _options: CustomHistogramSeriesOptions | null = null;

  draw(target: CanvasRenderingTarget2D, priceConverter: PriceToCoordinateConverter): void {
    target.useBitmapCoordinateSpace((scope) => this._drawImpl(scope, priceConverter));
  }

  update(data: PaneRendererCustomData<Time, CustomHistogramSeriesData>, options: CustomHistogramSeriesOptions): void {
    this._data = data;
    this._options = options;
  }

  _drawImpl(renderingScope: BitmapCoordinatesRenderingScope, priceToCoordinate: PriceToCoordinateConverter): void {}
}
