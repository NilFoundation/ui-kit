import { FC } from "react";
import { StatefulMenu, StatefulMenuProps } from "baseui/menu";
import { getMenuOverrides } from "./overrides";
import { MENU_SIZE } from "./types";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type MenuProps = StatefulMenuProps & {
  size?: MENU_SIZE;
  isLight?: boolean;
};

const Menu: FC<MenuProps> = ({ size = MENU_SIZE.medium, overrides: baseOverrides, isLight, ...props }) => {
  const menuOverrides = getMenuOverrides(size, !!isLight);
  const overrides = getMergedOverrides(menuOverrides, baseOverrides);

  // @ts-ignore
  return <StatefulMenu {...props} overrides={overrides} />;
};

export default Menu;
