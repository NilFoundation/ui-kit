import { ForwardRefRenderFunction, ReactNode, forwardRef, useCallback, useState } from "react";
import type { ChartOptions, DeepPartial } from "lightweight-charts";
import { ChartContext } from "./ChartContext";
import { useHandleChartResize } from "./useHandleChartResize";
import { useInitChart } from "./useInitChart";

export type ChartProps = {
  children: ReactNode;
  optionsOverrides?: DeepPartial<ChartOptions>;
};

const ChartRenderFunction: ForwardRefRenderFunction<HTMLDivElement, ChartProps> = (
  { children, optionsOverrides },
  ref
) => {
  const [container, setContainer] = useState<HTMLDivElement>();
  const handleRef = useCallback((ref: HTMLDivElement) => setContainer(ref), []);
  const chartApiRef = useInitChart({ container, optionsOverrides });
  useHandleChartResize(chartApiRef, container);

  return (
    <div ref={handleRef}>
      <ChartContext.Provider value={chartApiRef.current}>{children}</ChartContext.Provider>
    </div>
  );
};

const Chart = forwardRef(ChartRenderFunction);
Chart.displayName = "Chart";

export default Chart;
