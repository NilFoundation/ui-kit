import { ForwardRefRenderFunction, forwardRef } from "react";
import { ChartWidgetProps } from "./types";
import ChartWrapper from "./StyledChart";
import { ChartOptions, DeepPartial } from "lightweight-charts";
import { COLORS } from "../../shared";
import { styles } from "./styles";
import { useStyletron } from "styletron-react";
import { LineSeries } from "lightweight-charts-react-components";
import { merge } from "ts-deepmerge";

const chartWidgetDefaultOptions: DeepPartial<ChartOptions> = {
  crosshair: {
    mode: 2,
  },
  leftPriceScale: {
    visible: false,
  },
  timeScale: {
    fixLeftEdge: true,
    fixRightEdge: true,
    visible: false,
  },
};

const ChartWidgetRender: ForwardRefRenderFunction<HTMLDivElement, ChartWidgetProps> = (
  { data, color = COLORS.blue300, containerProps, options = {}, ...rest },
  ref
) => {
  const [css] = useStyletron();
  const { className, ...restContainerProps } = containerProps || {};
  return (
    <ChartWrapper
      ref={ref}
      options={merge(
        chartWidgetDefaultOptions,
        {
          leftPriceScale: {
            visible: false,
          },
          rightPriceScale: {
            visible: false,
          },
        },
        options
      )}
      containerProps={{
        className: `${className ? className + " " : ""}${css(styles.chartWidgetContainerStyles)}`,
        ...restContainerProps,
      }}
      {...rest}
    >
      <div className={css(styles.widgetShadowStyles)} />
      <LineSeries data={data} options={{ color, priceLineVisible: false }} />
    </ChartWrapper>
  );
};

const ChartWidget = forwardRef(ChartWidgetRender);
ChartWidget.displayName = "ChartWidget";
export default ChartWidget;
