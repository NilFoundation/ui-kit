import { Primitives } from "baseui/themes/types";

type CreateTheme = {
  primitives?: Partial<Primitives>;
  overrides?: any;
};

export const PRIMITIVE_COLORS = {
  primary50: "#FFFFFF",
  primary100: "#E6E6E6",
  primary200: "#C9C9C9",
  primary300: "#ADADAD",
  primary400: "#919191",
  primary500: "#757575",
  primary600: "#595959",
  primary700: "#3D3D3D",
  primary800: "#212121",
  primary900: "#141414",
};

export const createColors = (): CreateTheme => {
  return {
    primitives: {
      ...PRIMITIVE_COLORS,
      primaryA: PRIMITIVE_COLORS.primary200,
    },
    overrides: {},
  };
};
