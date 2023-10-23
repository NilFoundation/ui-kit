import { MutableRefObject, useLayoutEffect } from "react";
import debounce from "lodash.debounce";
import { ChartApiRef } from "./types";

export const useHandleChartResize = (chartApiRef: MutableRefObject<ChartApiRef>, container?: HTMLElement) => {
  useLayoutEffect(() => {
    if (!container) return;

    const chart = chartApiRef.current.api();

    const handleResize = debounce(() => {
      chart?.applyOptions({
        width: container.clientWidth,
      });
    }, 150);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartApiRef.current.clear();
    };
  }, []);
};
