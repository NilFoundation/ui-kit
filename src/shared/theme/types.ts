import { Primitives } from "baseui/themes/types";
import StyletronClient from "styletron-engine-atomic/lib/client/client";
import { Theme } from "baseui";

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

export type CreateTheme = (instance: StyletronClient, options?: CreateThemeOptions) => Theme;
