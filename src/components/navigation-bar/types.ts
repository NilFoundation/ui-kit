import { ReactNode } from "react";

export type NavigationItem<T = unknown> = T & {
  id: string;
  label: ReactNode;
  isSelected?: boolean;
  disabled?: boolean;
  children?: Array<NavigationItem<T>>;
  href?: string;
};

export type NavigationBarProps = {
  items: NavigationItem[];
  onItemClick?: (item: NavigationItem) => void;
  itemAs?: (item: NavigationItem) => ReactNode;
  onLogin?: () => void;
  isAuth?: boolean;
  authDropdownContainer?: ReactNode;
  brand?: ReactNode;
  username?: string;
  noLogin?: boolean;
  className?: string;
};
