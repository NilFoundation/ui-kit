import { ForwardRefRenderFunction, forwardRef } from "react";
import { ChartContext } from "./ChartContext";
import { useHandleChartResize } from "./useHandleChartResize";
import { useInitChart } from "./useInitChart";
import { ChartProps } from "./types";

type ChartComponentProps = {
  container: HTMLElement;
} & ChartProps;

const ChartComponentRenderFunction: ForwardRefRenderFunction<HTMLDivElement, ChartComponentProps> = (
  { children, container, ...rest },
  ref
) => {
  const chartApiRef = useInitChart({ container, ...rest });
  useHandleChartResize(chartApiRef, container);

  return <ChartContext.Provider value={chartApiRef.current}>{children}</ChartContext.Provider>;
};

const ChartComponent = forwardRef(ChartComponentRenderFunction);
ChartComponent.displayName = "ChartComponent";

export default ChartComponent;
