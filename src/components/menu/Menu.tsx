import { FC, useEffect, useRef } from "react";
import { StatefulMenu } from "baseui/menu";
import { getMenuOverrides } from "./overrides";
import { MENU_SIZE, MenuProps } from "./types";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

const Menu: FC<MenuProps> = ({ size = MENU_SIZE.medium, overrides: baseOverrides, ...props }) => {
  const rootRef = useRef<HTMLUListElement | null>(null);
  const menuOverrides = getMenuOverrides(size);
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
