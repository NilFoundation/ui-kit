import { FC } from "react";
import { Tabs as BaseTabs, ORIENTATION } from "baseui/tabs";
import { getTabsOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { TabsProps } from "./types";

const Tabs: FC<TabsProps> = ({ overrides: baseOverrides, ...props }) => {
  const tabsOverrides = getTabsOverrides();
  const overrides = getMergedOverrides(tabsOverrides, baseOverrides);

  return <BaseTabs {...props} overrides={overrides} />;
};

export { ORIENTATION };

export default Tabs;
