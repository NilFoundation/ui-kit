import { ForwardRefRenderFunction, ReactNode, forwardRef, useContext } from "react";
import { ChartContext } from "../ChartContext";

export type SeriesProps = {
  data: any;
  children: ReactNode
};

export const SeriesTemplateRenderFunction: ForwardRefRenderFunction<HTMLDivElement, SeriesProps> = (
  { data, children },
  ref
) => {
  const parent = useContext(ChartContext);

  return (
    
  );
};

const SeriesTemplate = forwardRef(SeriesTemplateRenderFunction);
SeriesTemplate.displayName = "SeriesTemplate";

export default SeriesTemplate;
