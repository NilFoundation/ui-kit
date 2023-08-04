import { createDarkTheme as baseCreateTheme } from "baseui";
import { createTypography } from "./typography";
import { createColors } from "./colors";
import { getDefaultFonts } from "./fonts";
import { getMergedOverrides } from "../utils/getMergedOverrides";
import { CreateTheme } from "./types";

export const createTheme: CreateTheme = (instance, { enableDefaultFonts = true, overrides = {} } = {}) => {
  const defaultFonts = getDefaultFonts(instance);

  const { primitives: typographyPrimitives, overrides: typographyOverrides } = createTypography(
    enableDefaultFonts ? defaultFonts : undefined
  );
  const { primitives: colorsPrimitives, overrides: colorsOverrides } = createColors();

  const themeOverrides = { ...typographyOverrides, ...colorsOverrides };

  return {
    theme: baseCreateTheme(
      { ...typographyPrimitives, ...colorsPrimitives },
      getMergedOverrides(themeOverrides, overrides)
    ),
    fonts: defaultFonts,
  };
};
