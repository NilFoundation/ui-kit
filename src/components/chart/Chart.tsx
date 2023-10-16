import { ForwardRefRenderFunction, ReactNode, forwardRef, useCallback, useState } from "react";
import type { ChartOptions, DeepPartial, MouseEventHandler, Time } from "lightweight-charts";
import { ChartContext } from "./ChartContext";
import { useHandleChartResize } from "./useHandleChartResize";
import { useInitChart } from "./useInitChart";

export type ChartProps = {
  children: ReactNode;
  optionsOverrides?: DeepPartial<ChartOptions>;
  onClick?: MouseEventHandler<Time>;
  onCrosshairMove?: MouseEventHandler<Time>;
  toolbar?: ReactNode;
  legend?: ReactNode;
};

const ChartRenderFunction: ForwardRefRenderFunction<HTMLDivElement, ChartProps> = (
  { children, optionsOverrides, onClick, onCrosshairMove, toolbar, legend },
  containerRef
) => {
  const [container, setContainer] = useState<HTMLDivElement>();
  const chartRef = useCallback((r: HTMLDivElement) => {
    setContainer(r);
  }, []);
  const chartApiRef = useInitChart({ container, optionsOverrides, onClick, onCrosshairMove });
  useHandleChartResize(chartApiRef, container);

  return (
    <div ref={containerRef}>
      <ChartContext.Provider value={chartApiRef.current}>
        {legend}
        {toolbar}
        <div ref={chartRef}>{children}</div>
      </ChartContext.Provider>
    </div>
  );
};

const Chart = forwardRef(ChartRenderFunction);
Chart.displayName = "Chart";

export default Chart;
