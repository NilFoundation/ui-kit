import { OnChangeHandler } from "baseui/tabs";
import { FC, useState } from "react";
import Tabs, { TabsProps } from "../Tabs";

const TabsStoryWidget: FC<TabsProps> = ({ activeKey: baseActiveKey = "0", ...props }) => {
  const [activeKey, setActiveKey] = useState<string | number>(baseActiveKey);

  const onChangeHandler: OnChangeHandler = (currentKey) => {
    setActiveKey(currentKey.activeKey);
  };

  return <Tabs {...props} activeKey={activeKey} onChange={onChangeHandler} />;
};

export default TabsStoryWidget;
