import { FC } from "react";
import { StatefulMenu, StatefulMenuProps } from "baseui/menu";
import { getMenuOverrides } from "./overrides";
import { MENU_SIZE } from "./types";

export type MenuProps = StatefulMenuProps & {
  size?: MENU_SIZE;
};

const Menu: FC<MenuProps> = ({ size = MENU_SIZE.medium, ...props }) => {
  const overrides = getMenuOverrides(size);

  // @ts-ignore
  return <StatefulMenu {...props} overrides={overrides} />;
};

export default Menu;
