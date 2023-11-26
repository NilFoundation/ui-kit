import { MutableRefObject, useLayoutEffect } from "react";
import debounce from "lodash.debounce";
import { ChartApiRef } from "./types";

export const useHandleChartResize = (
  chartApiRef: MutableRefObject<ChartApiRef>,
  autoResizeEnabled: boolean,
  container?: HTMLElement
) => {
  useLayoutEffect(() => {
    if (!container) return;

    if (!autoResizeEnabled) return;

    const handleResize = debounce(() => {
      chartApiRef.current?.update({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    }, 100);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [autoResizeEnabled, container]);
};
