import { ReactNode } from "react";
import { MENU_SIZE, MenuItem } from "../types";
import { StyleObject } from "styletron-standard";

export type MenuItemComponentProps = {
  item: MenuItem;
  size: MENU_SIZE;
  disabled?: boolean;
  ariaSelected?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  id?: string;
  isDropdownItem?: boolean;
  $style: StyleObject
};
