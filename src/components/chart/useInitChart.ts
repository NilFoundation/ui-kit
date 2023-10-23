import { useLayoutEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import { ChartApiRef, ChartOptions } from "./types";
import { chartDefaultOptions } from "./chartDefaultOptions";

export const useInitChart = ({
  container,
  ...rest
}: {
  container: HTMLElement;
} & ChartOptions) => {
  const { onClick, onCrosshairMove, ...restOptions } = rest;

  const chartApiRef = useRef<ChartApiRef>({
    _chart: null,
    api() {
      if (this._chart === null) {
        this._chart = createChart(container, {
          ...chartDefaultOptions,
          ...restOptions,
        });

        if (onClick) {
          this._chart.subscribeClick(onClick);
        }

        if (onCrosshairMove) {
          this._chart.subscribeCrosshairMove(onCrosshairMove);
        }

        this._chart.timeScale().fitContent();
      }

      return this._chart;
    },
    update(options: ChartOptions) {
      if (this._chart === null) {
        return;
      }

      const { onClick: nextOnClick, onCrosshairMove: nextOnCrosshairMove, ...restOptions } = options;

      if (onClick !== nextOnClick) {
        if (onClick) {
          this._chart.unsubscribeClick(onClick);
        }

        if (nextOnClick) {
          this._chart.subscribeClick(nextOnClick);
        }
      }

      if (onCrosshairMove !== nextOnCrosshairMove) {
        if (onCrosshairMove) {
          this._chart.unsubscribeCrosshairMove(onCrosshairMove);
        }

        if (nextOnCrosshairMove) {
          this._chart.subscribeCrosshairMove(nextOnCrosshairMove);
        }
      }

      this._chart.applyOptions(restOptions);
    },
    clear() {
      if (this._chart !== null) {
        if (onClick) {
          this._chart.unsubscribeClick(onClick);
        }

        if (onCrosshairMove) {
          this._chart.unsubscribeCrosshairMove(onCrosshairMove);
        }

        this._chart.remove();
      }
    },
  });

  useLayoutEffect(() => {
    chartApiRef.current.api();

    return () => {
      chartApiRef.current.clear();
    };
  }, []);

  useLayoutEffect(() => {
    if (!container) return;

    chartApiRef.current.update(rest);
  }, [rest]);

  return chartApiRef;
};
