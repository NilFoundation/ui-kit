import { MenuOverrides } from "baseui/menu";
import MenuEmptyState from "./ui/MenuEmptyState";
import { MENU_SIZE } from "./types";
import MenuItem from "./ui/MenuItem";
import MenuHeader from "./ui/MenuHeader";

export const getMenuOverrides = (size: MENU_SIZE): MenuOverrides => {
  return {
    List: {
      style: {
        borderBottomLeftRadius: "2px",
        borderBottomRightRadius: "2px",
        borderTopLeftRadius: "2px",
        borderTopRightRadius: "2px",
      },
    },
    OptgroupHeader: {
      component: MenuHeader,
      props: ({ ...props }) => ({
        ...props,
        size,
      }),
    },
    Option: {
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
