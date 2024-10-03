import { MenuOverrides } from "baseui/menu";
import MenuEmptyState from "./ui/MenuEmptyState";
import { MENU_SIZE, MenuProps } from "./types";
import MenuItem from "./ui/MenuItem";
import MenuHeader from "./ui/MenuHeader";
import { getListStyles, menuDividerStyles } from "./styles";

export const getMenuOverrides = (size: MENU_SIZE, isDropdown: MenuProps["isDropdown"]): MenuOverrides => {
  return {
    List: {
      style: getListStyles(isDropdown),
    },
    OptgroupHeader: {
      component: MenuHeader,
      props: ({ ...props }) => ({
        ...props,
        size,
      }),
    },
    ListItem: {
      component: MenuItem,
      props: ({ item, id, $disabled, $isFocused, ...props }) => ({
        ...props,
        id,
        size,
        item,
        disabled: $disabled,
        isFocused: $isFocused,
        ariaSelected: props?.["aria-selected"],
        isDropdownItem: isDropdown,
      }),
    },
    EmptyState: {
      component: MenuEmptyState,
    },
    MenuDivider: {
      style: menuDividerStyles,
    },
  };
};
