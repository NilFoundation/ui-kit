import { useContext, useLayoutEffect, useRef } from "react";
import { ChartContext } from "../ChartContext";
import { PriceScaleProps, PriceScaleApiRef } from "./types";
import { priceScaleDefaultOptions } from "./scalesDefaultOptions";

export const useInitPriceScale = ({ options, id }: PriceScaleProps) => {
  const chart = useContext(ChartContext);

  if (!chart) {
    throw new Error("Chart context not found");
  }

  const priceScaleApiRef = useRef<PriceScaleApiRef>({
    _priceScale: null,
    api() {
      if (!this._priceScale) {
        const chartApi = chart.api();

        if (!chartApi) {
          return null;
        }

        this._priceScale = chartApi.priceScale(id);

        this._priceScale.applyOptions({
          ...priceScaleDefaultOptions,
          ...options,
        });
      }

      return this._priceScale;
    },
    update({ id: nextId, options: nextOptions }) {
      if (this._priceScale === null) {
        return;
      }

      if (options !== nextOptions && nextOptions) {
        this._priceScale.applyOptions(nextOptions);
      }

      if (id !== nextId) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this._priceScale = chart.api()!.priceScale(nextId);
      }
    },
    clear() {
      if (this._priceScale !== null) {
        this._priceScale = null;
      }
    },
  });

  useLayoutEffect(() => {
    priceScaleApiRef.current.api();

    return () => {
      priceScaleApiRef.current.clear();
    };
  }, []);

  useLayoutEffect(() => {
    if (!chart) return;

    if (options) {
      priceScaleApiRef.current?.update({
        options,
        id,
      });
    }
  }, [options, id]);

  return priceScaleApiRef;
};
