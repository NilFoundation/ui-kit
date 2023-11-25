import type {
  TimeRangeChangeEventHandler,
  LogicalRangeChangeEventHandler,
  SizeChangeEventHandler,
  Range,
  Time,
} from "lightweight-charts";

type TimeScaleProps = {
  onVisibleTimeRangeChange?: TimeRangeChangeEventHandler<any>;
  onVisibleLogicalRangeChange?: LogicalRangeChangeEventHandler;
  onSizeChange?: SizeChangeEventHandler;
  fitContent?: boolean;
  initialVisibleRange?: Range<Time>;
};

const TimeScale = ({
  onVisibleTimeRangeChange,
  onVisibleLogicalRangeChange,
  onSizeChange,
  fitContent,
  initialVisibleRange,
}: TimeScaleProps) => {
  return null;
};

export default TimeScale;
