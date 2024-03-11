import { ColorType } from "lightweight-charts";
import type { ChartOptions, DeepPartial } from "lightweight-charts";
import { PRIMITIVE_COLORS } from "../../shared";
import { priceScaleDefaultOptions } from "./scales";
import { timeScaleDefaultOptions } from "./scales/scalesDefaultOptions";

export const chartDefaultOptions: DeepPartial<ChartOptions> = {
  layout: {
    background: {
      type: ColorType.Solid,
      color: PRIMITIVE_COLORS.gray900,
    },
    fontFamily: "Inter, sans-serif",
    textColor: PRIMITIVE_COLORS.gray400,
  },
  grid: {
    vertLines: { visible: false },
    horzLines: { visible: false },
  },
  crosshair: {
    vertLine: {
      color: PRIMITIVE_COLORS.gray400,
      width: 1,
      style: 0,
      labelVisible: false,
      visible: false,
    },
    horzLine: {
      color: PRIMITIVE_COLORS.gray400,
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
  timeScale: timeScaleDefaultOptions,
  leftPriceScale: {
    visible: true,
    ...priceScaleDefaultOptions,
  },
  rightPriceScale: {
    visible: false,
    ...priceScaleDefaultOptions,
  },
};
