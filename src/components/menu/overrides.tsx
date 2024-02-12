import { MenuOverrides } from "baseui/menu";
import MenuEmptyState from "./ui/MenuEmptyState";
import { MENU_SIZE } from "./types";
import MenuItem from "./ui/MenuItem";
import MenuHeader from "./ui/MenuHeader";
import { withoutBorderStyles } from "../../shared/styles/borderStyles";
import { PRIMITIVE_COLORS } from "../../shared";

export const getMenuOverrides = (size: MENU_SIZE, isLight: boolean): MenuOverrides => {
  return {
    List: {
      style: {
        ...withoutBorderStyles,
        outline: "none !important",
        ...(isLight
          ? {
              backgroundColor: PRIMITIVE_COLORS.white,
            }
          : {}),
      },
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
        isLight,
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
