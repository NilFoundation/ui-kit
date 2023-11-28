import { useContext, useLayoutEffect } from "react";
import { ChartContext } from "../ChartContext";

export const useLegend = (setData: () => void) => {
  const chart = useContext(ChartContext);

  if (!chart) {
    throw new Error("Chart context not found");
  }

    useLayoutEffect(() => {
      const currentCrosshairHandler = chart.api()?.
  }, []);
};
