import type {
  TimeRangeChangeEventHandler,
  LogicalRangeChangeEventHandler,
  SizeChangeEventHandler,
} from "lightweight-charts";

type TimeScaleProps = {
  onVisibleTimeRangeChange?: TimeRangeChangeEventHandler<any>;
  onVisibleLogicalRangeChange?: LogicalRangeChangeEventHandler;
  onSizeChange?: SizeChangeEventHandler;
};

const TimeScale = ({
  onVisibleTimeRangeChange,
  onVisibleLogicalRangeChange,
  onSizeChange,
}: TimeScaleProps) => {
  return null;
};

export default TimeScale;
