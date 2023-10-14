import { useLayoutEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import { ChartApiRef } from "./types";
import { chartDefaultOptions } from "./chartDefaultOptions";
import { ChartProps } from "./Chart";

export const useInitChart = ({
  container,
  optionsOverrides = {},
  onClick,
  onCrosshairMove,
}: {
  container?: HTMLDivElement;
  optionsOverrides?: ChartProps["optionsOverrides"];
  onClick?: ChartProps["onClick"];
  onCrosshairMove?: ChartProps["onCrosshairMove"];
}) => {
  const chartApiRef = useRef<ChartApiRef>({
    _chart: null,
    api() {
      if (!container) return this._chart;

      if (this._chart === null) {
        this._chart = createChart(container, {
          ...chartDefaultOptions,
          ...optionsOverrides,
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
    if (!container) return;

    chartApiRef.current.api()?.applyOptions(optionsOverrides);
  }, [optionsOverrides]);

  return chartApiRef;
};
