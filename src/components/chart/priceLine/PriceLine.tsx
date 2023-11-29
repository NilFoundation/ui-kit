import { PriceLineProps } from "./types";
import { useInitPriceLine } from "./useInitPriceLine";

const PriceLine = (props: PriceLineProps) => {
  useInitPriceLine(props);

  return null;
};

export default PriceLine;
