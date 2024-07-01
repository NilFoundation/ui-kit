import { BitmapCoordinatesRenderingScope, CanvasRenderingTarget2D } from "fancy-canvas";
import { ICustomSeriesPaneRenderer, PaneRendererCustomData, Time } from "lightweight-charts";
import { CustomHistogramSeriesData, CustomHistogramSeriesOptions } from "./types";

export class CustomHistogramRenderer implements ICustomSeriesPaneRenderer {
  _data: PaneRendererCustomData<Time, CustomHistogramSeriesData> | null = null;
  _options: CustomHistogramSeriesOptions | null = null;

  draw(target: CanvasRenderingTarget2D): void {
    target.useBitmapCoordinateSpace((scope) => this._drawImpl(scope));
  }

  update(data: PaneRendererCustomData<Time, CustomHistogramSeriesData>, options: CustomHistogramSeriesOptions): void {
    this._data = data;
    this._options = options;
  }

  _drawImpl({ context: ctx, verticalPixelRatio }: BitmapCoordinatesRenderingScope): void {
    if (this._data === null || this._data.bars.length === 0 || this._data.visibleRange === null) {
      return;
    }

    const tickWidth = Math.max(1, Math.floor(verticalPixelRatio));
    const histogramBase = Math.round(this._data.histogramBase * verticalPixelRatio);
    const topHistogramBase = histogramBase - Math.floor(tickWidth / 2);
    const bottomHistogramBase = topHistogramBase + tickWidth;

    for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
      const item = this._data.items[i];
      const current = this._precalculatedCache[i - this._data.visibleRange.from];
      const y = Math.round(item.y * verticalPixelRatio);
      ctx.fillStyle = item.barColor;

      let top: number;
      let bottom: number;

      if (y <= topHistogramBase) {
        top = y;
        bottom = bottomHistogramBase;
      } else {
        top = topHistogramBase;
        bottom = y - Math.floor(tickWidth / 2) + tickWidth;
      }

      ctx.fillRect(current.left, top, current.right - current.left + 1, bottom - top);
    }
  }
}
