import { createDarkTheme as baseCreateTheme } from "baseui";
import StyletronClient from "styletron-engine-atomic/lib/client/client";
import { createTypography } from "./typography";
import { createColors } from "./colors";

export const createTheme = (instance: StyletronClient) => {
  const { primitives: typographyPrimitives, overrides: typographyOverrides } = createTypography(instance);
  const { primitives: colorsPrimitives, overrides: colorsOverrides } = createColors();
  return baseCreateTheme(
    { ...typographyPrimitives, ...colorsPrimitives },
    { ...typographyOverrides, ...colorsOverrides }
  );
};
