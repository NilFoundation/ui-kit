import { ForwardRefRenderFunction, ReactNode, forwardRef } from "react";

type ChartToolbarProps = {
  icons: ReactNode;
};

const ChartToolbarRenderFunction: ForwardRefRenderFunction<HTMLDivElement, ChartToolbarProps> = ({ icons }, ref) => {
  return <div ref={ref}></div>;
};

const ChartToolbar = forwardRef(ChartToolbarRenderFunction);
ChartToolbar.displayName = "ChartToolbar";

export default ChartToolbar;
