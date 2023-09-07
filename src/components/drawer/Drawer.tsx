import { FC } from "react";
import { ANCHOR, SIZE, Drawer as BaseDrawer, DrawerProps as BaseDrawerProps, DrawerOverrides } from "baseui/drawer";
import { getDrawerOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type DrawerOwnProps = {
  animate?: boolean;
  closeable?: boolean;
  overrides?: DrawerOverrides;
  anchor?: (typeof ANCHOR)[keyof typeof ANCHOR];
  size?: (typeof SIZE)[keyof typeof SIZE];
  showBackdrop?: boolean;
  autoFocus?: boolean;
};

export type DrawerProps = DrawerOwnProps & Omit<BaseDrawerProps, keyof DrawerOwnProps>;

const Drawer: FC<DrawerProps> = ({
  anchor = ANCHOR.right,
  size = SIZE.default,
  animate = true,
  closeable = true,
  overrides: baseOverrides,
  showBackdrop = true,
  autoFocus = true,
  ...props
}) => {
  const drawerOverrides = getDrawerOverrides();
  const overrides = getMergedOverrides(drawerOverrides, baseOverrides);

  return (
    <BaseDrawer
      {...props}
      anchor={anchor}
      size={size}
      animate={animate}
      closeable={closeable}
      showBackdrop={showBackdrop}
      autoFocus={autoFocus}
      overrides={overrides}
    />
  );
};

export default Drawer;
