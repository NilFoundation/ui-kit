import { useMemo } from "react";
import { createSeriesContext } from "./SeriesContext";
import { useInitSeries } from "./useInitSeries";
import { SeriesType, SeriesTemplateProps } from "./types";

export const SeriesTemplate = <T extends SeriesType = "Line">({ children, ...rest }: SeriesTemplateProps<T>) => {
  const seriesApi = useInitSeries(rest);
  const SeriesContext = useMemo(() => createSeriesContext<T>(), []);

  return <SeriesContext.Provider value={seriesApi.current}>{children}</SeriesContext.Provider>;
};

export default SeriesTemplate;
