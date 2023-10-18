import { ForwardRefRenderFunction, forwardRef } from "react";
import { useStyletron } from "styletron-react";

type ChartLegendProps = {
};

const ChartLegendRenderFunction: ForwardRefRenderFunction<HTMLDivElement, ChartLegendProps> = (_, ref) => {
  const [css] = useStyletron();

  return (
    <div ref={ref}>
      ChartLegend
    </div>
  );
};

const ChartLegend = forwardRef(ChartLegendRenderFunction);
ChartLegend.displayName = "ChartLegend";

export default ChartLegend;
