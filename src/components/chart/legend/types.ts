import { BarData, LineData } from "lightweight-charts";
import { ReactNode } from "react";
import { XOR } from "ts-xor";

export type LegendCommonProps = {
  className?: string;
  dataIndexToShowWhileNotHovered?: number | "last" | "first";
  label?: string;
  id: string;
};

export type LegendType = "line" | "bar";

export type LegendContext<T extends LegendType> = {
  setData: (data: T extends "line" ? LineData : BarData) => void;
  dataIndexToShowWhileNotHovered: number | "last" | "first";
};

export type LegendLineProps = LegendCommonProps & {
  type: "line";
  content: ReactNode | ((props: { data: LineData }) => ReactNode);
};

export type LegendBarProps = LegendCommonProps & {
  type: "bar";
  content: ReactNode | ((props: { data: BarData }) => ReactNode);
};

export type LegendProps = XOR<LegendLineProps, LegendBarProps>;
