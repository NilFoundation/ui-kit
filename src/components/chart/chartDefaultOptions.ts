import { ColorType } from "lightweight-charts";
import type { ChartOptions, DeepPartial } from "lightweight-charts";
import { PRIMITIVE_COLORS } from "../../shared";

export const chartDefaultOptions: DeepPartial<ChartOptions> = {
  layout: {
    background: {
      type: ColorType.Solid,
      color: PRIMITIVE_COLORS.gray900,
    },
    fontFamily: "Inter, sans-serif",
    textColor: PRIMITIVE_COLORS.gray100,
  },
  grid: {
    vertLines: { visible: false },
    horzLines: { visible: false },
  },
  crosshair: {
    vertLine: {
      color: PRIMITIVE_COLORS.gray600,
      width: 1,
      style: 0,
      visible: true,
      labelVisible: true,
    },
    horzLine: {
      color: PRIMITIVE_COLORS.gray600,
      width: 1,
      style: 0,
      visible: true,
      labelVisible: true,
    },
    mode: 0,
  },
  localization: {
    locale: "en-US",
  },
  timeScale: {
    tickMarkMaxCharacterLength: 15,
  },
};
