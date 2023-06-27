import { FC } from "react";
import { ANCHOR, Drawer as BaseDrawer, DrawerProps as BaseDrawerProps } from "baseui/drawer";
import { getDrawerOverrides } from "./overrides";

export type DrawerProps = Omit<BaseDrawerProps, "animate" | "closeable"> & {
  animate?: boolean;
  closeable?: boolean;
};

const Drawer: FC<DrawerProps> = ({ anchor = ANCHOR.right, animate = true, closeable = true, ...props }) => {
  const overrides = getDrawerOverrides();

  return <BaseDrawer {...props} anchor={anchor} animate={animate} closeable={closeable} overrides={overrides} />;
};

export default Drawer;
