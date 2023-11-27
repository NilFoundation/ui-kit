import { MutableRefObject, useLayoutEffect } from "react";
import { ChartApiRef } from "./types";
import { debounce } from "../../shared/utils/debounce";

export const useHandleChartResize = (
  chartApiRef: MutableRefObject<ChartApiRef>,
  autoResizeEnabled: boolean,
  container?: HTMLElement
) => {
  useLayoutEffect(() => {
    if (!container) return;

    if (!autoResizeEnabled) return;

    const handleResize = debounce(() => {
      chartApiRef.current?.api()?.applyOptions({
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
