import { ForwardRefRenderFunction, ReactNode, forwardRef, useContext } from "react";
import { ChartContext } from "../ChartContext";
import { ChartApiRef } from "../types";
import { useStyletron } from "styletron-react";
import { styles as s } from "./styles";
import TimeSpanSelector from "./TimeSpanSelector";

type ChartToolbarProps = {
  icons?: ReactNode | ((chartApi: ChartApiRef) => ReactNode);
  initialTimeSpan?: string;
};

const ChartToolbarRenderFunction: ForwardRefRenderFunction<HTMLDivElement, ChartToolbarProps> = (
  { icons, initialTimeSpan },
  ref
) => {
  const chart = useContext(ChartContext);
  const [css] = useStyletron();

  if (!chart) {
    throw new Error("Chart context found");
  }

  const renderIcons = () => {
    if (!icons) {
      return null;
    }

    if (typeof icons === "function") {
      return icons(chart);
    }

    return icons;
  };

  return (
    <div ref={ref} className={css(s.containerStyles)}>
      <TimeSpanSelector initialTimeSpan={initialTimeSpan} />
      {renderIcons()}
    </div>
  );
};

const ChartToolbar = forwardRef(ChartToolbarRenderFunction);
ChartToolbar.displayName = "ChartToolbar";

export default ChartToolbar;
