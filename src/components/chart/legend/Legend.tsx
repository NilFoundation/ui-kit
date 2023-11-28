import { useStyletron } from "styletron-react";
import { styles as s } from "./styles";
import { useState } from "react";
import { LegendProps } from "./types";

const Legend = ({ id, type, content }: LegendProps) => {
  const [data, setData] = useState<any>();
  const [css] = useStyletron();

  return <div className={css(s.legend)}>{typeof content === "function" ? content({ data }) : content}</div>;
};

export default Legend;
