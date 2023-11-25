import { ForwardRefRenderFunction, forwardRef, useCallback, useState } from "react";
import { ChartProps, Chart } from "./types";
import ChartComponent from "./ChartComponent";
import { useStyletron } from "styletron-react";
import { styles as s } from "./styles";
import { CandlestickSeries, HistogramSeries, LineSeries } from "./series";

const ChartRenderFunction: ForwardRefRenderFunction<HTMLDivElement, ChartProps> = (
  { children, className, legend = null, ...rest },
  ref
) => {
  const [css] = useStyletron();
  const [container, setContainer] = useState<HTMLDivElement>();
  const containerRef = useCallback(
    (r: HTMLDivElement) => {
      setContainer(r);

      if (ref) {
        if (typeof ref === "function") {
          containerRef(r);
        } else {
          ref.current = r;
        }
      }
    },
    [ref]
  );

  return (
    <div ref={containerRef} className={`${className} ${css(s.containerStyles)}`}>
      {legend}
      {!!container && (
        <ChartComponent container={container} {...rest}>
          {children}
        </ChartComponent>
      )}
    </div>
  );
};

const ChartWrapper: Chart = forwardRef(ChartRenderFunction);
ChartWrapper.displayName = "ChartWrapper";

ChartWrapper.LineSeries = LineSeries;
ChartWrapper.HistogramSeries = HistogramSeries;
ChartWrapper.CandlestickSeries = CandlestickSeries;

export default ChartWrapper;
