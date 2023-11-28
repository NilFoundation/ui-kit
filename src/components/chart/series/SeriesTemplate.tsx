import { useInitSeries } from "./useInitSeries";
import { SeriesType, SeriesTemplateProps } from "./types";
import { SeriesContext } from "./SeriesContext";

export const SeriesTemplate = <T extends SeriesType = "Line">({ children, ...rest }: SeriesTemplateProps<T>) => {
  const seriesApi = useInitSeries(rest);

  return <SeriesContext.Provider value={seriesApi.current}>{children}</SeriesContext.Provider>;
};

export default SeriesTemplate;
