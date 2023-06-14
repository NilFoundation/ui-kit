import { FC } from "react";
import { Tab as BaseTab, TabProps as BaseTabProps } from "baseui/tabs";

export type TabProps = BaseTabProps;

const Tab: FC<TabProps> = ({ ...props }) => {
  return <BaseTab {...props} />;
};

export default Tab;
