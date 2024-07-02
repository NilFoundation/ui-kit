import { ORIENTATION, TabOverrides, TabsOverrides } from "baseui/tabs";
import {
  tabPrimaryActiveStyles,
  tabContentStyles,
  tabPrimaryDisabledStyles,
  tabsBarStyles,
  tabSecondaryActiveStyles,
  tabSecondaryStyles,
  tabPrimaryStyles,
  tabPrimaryVerticalStyles,
  tabSecondaryDisabledStyles,
} from "./styles";
import { TAB_KIND } from "./types";

export const getTabOverrides = (kind: TAB_KIND): TabOverrides => {
  const tabStyles = kind === TAB_KIND.primary ? tabPrimaryStyles : tabSecondaryStyles;
  const activeStyles = kind === TAB_KIND.primary ? tabPrimaryActiveStyles : tabSecondaryActiveStyles;
  const tabDisabledStyles = kind === TAB_KIND.primary ? tabPrimaryDisabledStyles : tabSecondaryDisabledStyles;
  const tabVerticalStyles = kind === TAB_KIND.primary ? tabPrimaryVerticalStyles : {};

  return {
    Tab: {
      style: ({ $disabled, $active, $orientation, $isFocusVisible }) => {
        return {
          ...tabStyles,
          ...($orientation === ORIENTATION.vertical ? tabVerticalStyles : {}),
          ...($active || $isFocusVisible ? activeStyles : {}),
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
