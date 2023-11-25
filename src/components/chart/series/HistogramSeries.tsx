import SeriesTemplate from "./SeriesTemplate";
import { SeriesProps } from "./types";

const HistogramSeries = ({ children, ...rest }: SeriesProps<"Histogram">) => {
  return (
    <SeriesTemplate type="Histogram" {...rest}>
      {children}
    </SeriesTemplate>
  );
};

export default HistogramSeries;
