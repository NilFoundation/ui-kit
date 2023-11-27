import { TimeScaleProps } from "./types";
import { useInitTimeScale } from "./useInitTimeScale";

const TimeScale = (props: TimeScaleProps) => {
  useInitTimeScale(props);
  return null;
};

export default TimeScale;
