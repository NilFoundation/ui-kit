import { PriceScaleProps } from "./types";
import { useInitPriceScale } from "./useInitPriceScale";

const PriceScale = (props: PriceScaleProps) => {
  useInitPriceScale(props);
  return null;
};

export default PriceScale;
