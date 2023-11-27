import SeriesTemplate from "./SeriesTemplate";
import { SeriesProps } from "./types";

const CandlestickSeries = ({ children, ...rest }: SeriesProps<"Candlestick">) => {
  return (
    <SeriesTemplate type="Candlestick" {...rest}>
      {children}
    </SeriesTemplate>
  );
};

export default CandlestickSeries;
