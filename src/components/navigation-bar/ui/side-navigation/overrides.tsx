import { TreeViewOverrides } from "baseui/tree-view";
import { expandProperty } from "inline-style-expand-shorthand";
import { COLORS } from "../../../../shared";
import { CaretDownIcon, CaretUpIcon } from "../../../icons";
import NavTreeLabel from "./NavTreeLabel";
import { NavigationItem } from "../../types";
import { ReactNode } from "react";
import { DrawerOverrides } from "baseui/drawer";

export const getDrawerOverrides = (): DrawerOverrides => {
  return {
    DrawerContainer: {
      style: {
        backgroundColor: COLORS.white,
      },
    },
    DrawerBody: {
      style: {
        ...expandProperty("margin", "0"),
        ...expandProperty("padding", "0 16px 16px 16px"),
      },
    },
    Close: {
      component: () => <></>,
    },
  };
};

export const getTreeViewOverrides = (itemAs?: (item: NavigationItem) => ReactNode): TreeViewOverrides => {
  return {
    TreeItemList: {
      style: {
        ...expandProperty("margin", "0 !important"),
      },
    },
    TreeItem: {
      style: {
        cursor: "pointer",
      },
    },
    TreeLabel: {
      component: ({ ...props }) => <NavTreeLabel {...props} itemAs={itemAs} />,
      style: ({ $hasChildren }) => {
        return {
          ...expandProperty("padding", "16px 8px"),
          ...expandProperty("borderBottom", `1px solid ${COLORS.gray100}`),
          color: "inherit",
          marginLeft: !$hasChildren ? "-20px" : "0",
          backgroundColor: COLORS.white,

          ":hover": {
            backgroundColor: COLORS.white,
          },
        };
      },
    },
    IconContainer: {
      style: {
        order: "2",
        marginLeft: "4px",
      },
    },
    CollapseIcon: {
      component: CaretUpIcon,
    },
    ExpandIcon: {
      component: CaretDownIcon,
    },
  };
};
