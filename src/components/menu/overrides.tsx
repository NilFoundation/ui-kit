import { MenuOverrides } from "baseui/menu";
import MenuEmptyState from "./ui/MenuEmptyState";
import { MENU_SIZE } from "./types";
import MenuItem from "./ui/MenuItem";
import MenuHeader from "./ui/MenuHeader";
import { listStyles } from "./styles";

export const getMenuOverrides = (size: MENU_SIZE): MenuOverrides => {
  return {
    List: {
      style: listStyles,
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
      }),
    },
    EmptyState: {
      component: MenuEmptyState,
    },
  };
};
