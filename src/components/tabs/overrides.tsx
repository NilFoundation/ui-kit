import { ORIENTATION, TabOverrides, TabsOverrides } from "baseui/tabs";
import {
  tabActiveStyles,
  tabContentStyles,
  tabDisabledStyles,
  tabsBarStyles,
  tabStyles,
  tabVerticalStyles,
} from "./styles";

export const getTabOverrides = (): TabOverrides => {
  return {
    Tab: {
      style: ({ $disabled, $active, $orientation, $isFocusVisible }) => {
        return {
          ...($orientation === ORIENTATION.vertical ? tabVerticalStyles : tabStyles),
          ...($active || $isFocusVisible ? tabActiveStyles : {}),
          ...($disabled ? tabDisabledStyles : {}),
        };
      },
    },
  };
};

export const getTabsOverrides = (): TabsOverrides => {
  return {
    TabBar: {
      style: () => ({
        ...tabsBarStyles,
      }),
    },
    TabContent: {
      style: () => ({
        ...tabContentStyles,
      }),
    },
  };
};
