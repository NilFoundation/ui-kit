import { ColorType } from "lightweight-charts";
import type { ChartOptions, DeepPartial } from "lightweight-charts";
import { COLORS } from "../../shared";

export const chartDefaultOptions: DeepPartial<ChartOptions> = {
  autoSize: false,
  layout: {
    background: {
      type: ColorType.Solid,
      color: COLORS.gray900,
    },
    fontFamily: "Inter, sans-serif",
    textColor: COLORS.gray400,
    attributionLogo: false,
  },
  grid: {
    vertLines: { visible: false },
    horzLines: { visible: false },
  },
  crosshair: {
    vertLine: {
      color: COLORS.gray50,
      width: 1,
      style: 2,
      visible: true,
      labelVisible: true,
    },
    horzLine: {
      visible: false,
      labelVisible: false,
    },
    mode: 0,
  },
  localization: {
    locale: "en-US",
  },
};
