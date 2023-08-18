import { FC, useEffect, useRef } from "react";
import { StatefulMenu, StatefulMenuProps } from "baseui/menu";
import { getMenuOverrides } from "./overrides";
import { MENU_SIZE } from "./types";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type MenuProps = StatefulMenuProps & {
  size?: MENU_SIZE;
  isLight?: boolean;
};

const Menu: FC<MenuProps> = ({ size = MENU_SIZE.medium, overrides: baseOverrides, isLight, ...props }) => {
  const rootRef = useRef<HTMLUListElement | null>(null);

  const menuOverrides = getMenuOverrides(size, !!isLight);
  const overrides = getMergedOverrides(menuOverrides, baseOverrides);

  useEffect(() => {
    const menuElement = rootRef.current;

    if (menuElement) {
      menuElement.removeAttribute("tabindex");
    }
  }, [rootRef]);

  return <StatefulMenu {...props} overrides={overrides} rootRef={rootRef} />;
};

export default Menu;
