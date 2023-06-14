import { FC, useState } from "react";
import { Tabs as BaseTabs, TabsProps as BaseTabsProps, ORIENTATION, OnChangeHandler } from "baseui/tabs";

export type TabsProps = BaseTabsProps;

const Tabs: FC<TabsProps> = ({ activeKey: baseActiveKey = "0", onChange, ...props }) => {
  const [activeKey, setActiveKey] = useState<string | number>(baseActiveKey);

  const onChangeHandler: OnChangeHandler = (currentKey) => {
    setActiveKey(currentKey.activeKey);
    onChange?.(currentKey);
  };

  return <BaseTabs {...props} activeKey={activeKey} onChange={onChangeHandler} />;
};

export { ORIENTATION };

export default Tabs;
