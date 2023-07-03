import { FC } from "react";
import { Tabs as BaseTabs, TabsProps as BaseTabsProps, ORIENTATION } from "baseui/tabs";
import { getTabsOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type TabsProps = BaseTabsProps;

const Tabs: FC<TabsProps> = ({ overrides: baseOverrides, ...props }) => {
  const tabsOverrides = getTabsOverrides();
  const overrides = getMergedOverrides(tabsOverrides, baseOverrides);

  return <BaseTabs {...props} overrides={overrides} />;
};

export { ORIENTATION };

export default Tabs;
