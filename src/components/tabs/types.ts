import { ReactNode } from "react";
import { TabProps as BaseTabProps, TabsProps as BaseTabsProps } from "baseui/tabs";

export type TabProps = BaseTabProps & {
  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;
  kind?: TAB_KIND;
};

export type TabsProps = BaseTabsProps;

export enum TAB_KIND {
  primary = "primary",
  secondary = "secondary",
}
