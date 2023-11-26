import { useContext, useLayoutEffect, useRef } from "react";
import { ChartContext } from "../ChartContext";
import { TimeScaleApiRef, TimeScaleProps } from "./types";
import { timeScaleDefaultOptions } from "./scalesDefaultOptions";

export const useInitTimeScale = ({
  onVisibleTimeRangeChange,
  onVisibleLogicalRangeChange,
  onSizeChange,
  fitContent,
  initialVisibleRange,
  options,
}: TimeScaleProps) => {
  const chart = useContext(ChartContext);

  if (!chart) {
    throw new Error("Chart context not found");
  }

  const timeScaleApiRef = useRef<TimeScaleApiRef>({
    _timeScale: null,
    api() {
      if (!this._timeScale) {
        const chartApi = chart.api();

        if (!chartApi) {
          return null;
        }

        this._timeScale = chartApi.timeScale();
        if (onVisibleTimeRangeChange) {
          this._timeScale.subscribeVisibleTimeRangeChange(onVisibleTimeRangeChange);
        }

        if (onVisibleLogicalRangeChange) {
          this._timeScale.subscribeVisibleLogicalRangeChange(onVisibleLogicalRangeChange);
        }

        if (onSizeChange) {
          this._timeScale.subscribeSizeChange(onSizeChange);
        }

        if (fitContent) {
          this._timeScale.fitContent();
        }

        if (initialVisibleRange) {
          this._timeScale.setVisibleRange(initialVisibleRange);
        }

        this._timeScale.applyOptions({
          ...timeScaleDefaultOptions,
          ...options,
        });
      }

      return this._timeScale;
    },
    update(params) {
      if (this._timeScale === null) {
        return;
      }

      const {
        options: nextOptions,
        onSizeChange: nextSizeChange,
        initialVisibleRange: nextInitialVisibleRange,
        onVisibleLogicalRangeChange: nextOnVisibleLogicalRangeChange,
        onVisibleTimeRangeChange: nextOnVisibleTimeRangeChange,
        fitContent: nextFitContent,
      } = params;

      if (options !== nextOptions && nextOptions) {
        this._timeScale.applyOptions(nextOptions);
      }

      if (onSizeChange !== nextSizeChange && nextSizeChange) {
        if (onSizeChange) {
          this._timeScale.unsubscribeSizeChange(onSizeChange);
        }

        if (nextSizeChange) {
          this._timeScale.subscribeSizeChange(nextSizeChange);
        }
      }

      if (initialVisibleRange !== nextInitialVisibleRange && nextInitialVisibleRange) {
        this._timeScale.setVisibleRange(nextInitialVisibleRange);
      }

      if (onVisibleLogicalRangeChange !== nextOnVisibleLogicalRangeChange && nextOnVisibleLogicalRangeChange) {
        if (onVisibleLogicalRangeChange) {
          this._timeScale.unsubscribeVisibleLogicalRangeChange(onVisibleLogicalRangeChange);
        }

        if (nextOnVisibleLogicalRangeChange) {
          this._timeScale.subscribeVisibleLogicalRangeChange(nextOnVisibleLogicalRangeChange);
        }
      }

      if (onVisibleTimeRangeChange !== nextOnVisibleTimeRangeChange && nextOnVisibleTimeRangeChange) {
        if (onVisibleTimeRangeChange) {
          this._timeScale.unsubscribeVisibleTimeRangeChange(onVisibleTimeRangeChange);
        }

        if (nextOnVisibleTimeRangeChange) {
          this._timeScale.subscribeVisibleTimeRangeChange(nextOnVisibleTimeRangeChange);
        }
      }

      if (fitContent !== nextFitContent && nextFitContent) {
        this._timeScale.fitContent();
      }
    },
    clear() {
      if (this._timeScale !== null) {
        if (onVisibleTimeRangeChange) {
          this._timeScale.unsubscribeVisibleTimeRangeChange(onVisibleTimeRangeChange);
        }

        if (onVisibleLogicalRangeChange) {
          this._timeScale.unsubscribeVisibleLogicalRangeChange(onVisibleLogicalRangeChange);
        }

        if (onSizeChange) {
          this._timeScale.unsubscribeSizeChange(onSizeChange);
        }

        this._timeScale = null;
      }
    },
  });

  useLayoutEffect(() => {
    timeScaleApiRef.current.api();

    return () => {
      timeScaleApiRef.current.clear();
    };
  }, []);

  useLayoutEffect(() => {
    if (!chart) return;

    if (options) {
      timeScaleApiRef.current?.update({
        options,
        fitContent,
        initialVisibleRange,
        onSizeChange,
        onVisibleLogicalRangeChange,
        onVisibleTimeRangeChange,
      });
    }
  }, [options, fitContent, initialVisibleRange, onSizeChange, onVisibleLogicalRangeChange, onVisibleTimeRangeChange]);

  return timeScaleApiRef;
};
