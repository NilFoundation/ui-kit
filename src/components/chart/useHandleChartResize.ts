import { MutableRefObject, useLayoutEffect } from "react";
import { ChartApiRef } from "./types";

export const useHandleChartResize = (chartApiRef: MutableRefObject<ChartApiRef>, container?: HTMLDivElement) => {
  useLayoutEffect(() => {
    if (!container) return;

    const chart = chartApiRef.current.api();

    const handleResize = () => {
      chart?.applyOptions({
        width: container.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartApiRef.current.clear();
    };
  }, []);
};
