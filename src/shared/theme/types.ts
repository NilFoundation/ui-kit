import { Primitives } from "baseui/themes/types";
import { Theme } from "baseui";
import { StandardEngine } from "styletron-standard";

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

export type CreateTheme = (instance: StandardEngine, options?: CreateThemeOptions) => Theme;
