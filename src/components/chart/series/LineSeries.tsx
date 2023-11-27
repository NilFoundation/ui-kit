import SeriesTemplate from "./SeriesTemplate";
import { SeriesProps } from "./types";

const LineSeries = ({ children, ...rest }: SeriesProps<"Line">) => {
  return (
    <SeriesTemplate type="Line" {...rest}>
      {children}
    </SeriesTemplate>
  );
};

export default LineSeries;
