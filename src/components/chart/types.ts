import type { LineData } from "lightweight-charts";
import { ChartProps } from "lightweight-charts-react-components";

export type ChartWidgetProps = {
  data: LineData[];
  color?: string;
} & Omit<ChartProps, "children" | "onCrosshairMove">;
