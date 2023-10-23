import { useContext, useState } from "react";
import { ChartContext } from "../ChartContext";
import { useStyletron } from "styletron-react";
import { Tabs, Tab } from "baseui/tabs";
import { styles as s } from "./styles";
import { TimeSpan } from "./TimeSpan";

type TimeSpanSelectorProps = {
  initialTimeSpan?: TimeSpan;
};

const TimeSpanSelector = ({ initialTimeSpan = TimeSpan["15M"] }: TimeSpanSelectorProps) => {
  const [activeKey, setActiveKey] = useState<string | number>(initialTimeSpan);
  const chart = useContext(ChartContext);
  const [css] = useStyletron();

  return (
    <div className={css(s.timeIntervalsStyles)}>
      <Tabs
        onChange={({ activeKey }) => {
          setActiveKey(activeKey);
        }}
        activeKey={activeKey}
      >
        <Tab title="Tab Link 1">Content 1</Tab>
        <Tab title="Tab Link 2">Content 2</Tab>
        <Tab title="Tab Link 3">Content 3</Tab>
      </Tabs>
    </div>
  );
};

export default TimeSpanSelector;
