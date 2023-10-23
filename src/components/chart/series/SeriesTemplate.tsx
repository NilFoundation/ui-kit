import { ForwardRefRenderFunction, ReactNode, forwardRef } from "react";
import type { SeriesMarker, Time, SeriesType, SeriesDataItemTypeMap } from "lightweight-charts";
import { SeriesContext } from "./SeriesContext";
import { useInitSeries } from "./useInitSeries";

export type SeriesTemplateProps<T extends SeriesType> = {
  type: T;
  data: SeriesDataItemTypeMap[T][];
  children?: ReactNode;
  markers?: SeriesMarker<Time>[];
};

export const SeriesTemplateRenderFunction: ForwardRefRenderFunction<HTMLDivElement, SeriesTemplateProps> = (
  { data, children, markers, type },
  ref
) => {
  const seriesApi = useInitSeries();

  return <SeriesContext.Provider value={seriesApi.current}>{children}</SeriesContext.Provider>;
};

const SeriesTemplate = forwardRef(SeriesTemplateRenderFunction);
SeriesTemplate.displayName = "SeriesTemplate";

export default SeriesTemplate;
