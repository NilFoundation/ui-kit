import { FC } from "react";
import { Tabs as BaseTabs, TabsProps as BaseTabsProps, ORIENTATION } from "baseui/tabs";
import { getTabsOverrides } from "./overrides";

export type TabsProps = BaseTabsProps;

const Tabs: FC<TabsProps> = ({ ...props }) => {
  const overrides = getTabsOverrides();

  return <BaseTabs {...props} overrides={overrides} />;
};

export { ORIENTATION };

export default Tabs;
