import { ForwardRefRenderFunction, forwardRef } from "react";
import { useStyletron } from "styletron-react";
import { styles as s } from "./styles";
import { Chart, ChartProps } from "lightweight-charts-react-components";
import { chartDefaultOptions } from "./chartDefaultOptions";
import { merge } from "ts-deepmerge";

const StyledChartRenderFunction: ForwardRefRenderFunction<HTMLDivElement, ChartProps> = (
  { containerProps = {}, options = {}, ...rest },
  ref
) => {
  const [css] = useStyletron();
  const { className, ...restContainerProps } = containerProps;
  return (
    <Chart
      containerProps={{
        className: `${className ? className + " " : ""}${css(s.containerStyles)}`,
        ...restContainerProps,
      }}
      options={merge(chartDefaultOptions, options)}
      {...rest}
      ref={ref}
    />
  );
};

const StyledChart = forwardRef(StyledChartRenderFunction);
StyledChart.displayName = "StyledChart";
export default StyledChart;
