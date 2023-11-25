import { MutableRefObject, useLayoutEffect } from "react";
import debounce from "lodash.debounce";
import { ChartApiRef } from "./types";

export const useHandleChartResize = (chartApiRef: MutableRefObject<ChartApiRef>, container?: HTMLElement) => {
  useLayoutEffect(() => {
    if (!container) return;

    const handleResize = debounce(() => {
      chartApiRef.current?.update({
        width: container.clientWidth,
      });
    }, 100);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartApiRef.current.clear();
    };
  }, []);
};
