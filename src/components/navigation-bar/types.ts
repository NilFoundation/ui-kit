import { ReactNode } from "react";

export type NavigationItem<T = unknown> = T & {
  id: string;
  label: ReactNode;
  isSelected?: boolean;
  children?: Array<NavigationItem<T>>;
};

export type NavigationBarProps = {
  items: NavigationItem[];
  onItemClick?: (item: NavigationItem) => void;
  onLogin?: () => void;
  isAuth?: boolean;
  authDropdownContainer?: ReactNode;
  brand?: ReactNode;
  username?: string;
  className?: string;
};
