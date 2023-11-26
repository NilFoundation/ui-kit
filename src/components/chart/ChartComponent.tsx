import { ChartContext } from "./ChartContext";
import { useHandleChartResize } from "./useHandleChartResize";
import { useInitChart } from "./useInitChart";
import { ChartProps } from "./types";

type ChartComponentProps = {
  container: HTMLElement;
} & ChartProps;

const ChartComponent: React.FC<ChartComponentProps> = ({ children, container, autoResize = true, ...rest }) => {
  const chartApiRef = useInitChart({ container, ...rest });
  useHandleChartResize(chartApiRef, autoResize, container);

  return <ChartContext.Provider value={chartApiRef.current}>{children}</ChartContext.Provider>;
};

export default ChartComponent;
