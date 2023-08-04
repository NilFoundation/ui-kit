import { Primitives } from "baseui/themes/types";
import { Theme } from "baseui";
import type { StandardEngine } from "styletron-standard";

export type DefaultTheme = {
  primitives?: Partial<Primitives>;
  overrides?: any;
};

export type DefaultFonts = {
  defaultRegularFont: string;
  defaultSemiBoldFont: string;
  defaultMonoRegularFont: string;
};

export type CreateThemeOptions = {
  enableDefaultFonts?: boolean;
  overrides?: any;
};

export type CreateThemeReturnType = {
  theme: Theme;
  fonts: DefaultFonts;
};

export type CreateTheme = (instance: StandardEngine, options?: CreateThemeOptions) => CreateThemeReturnType;
