import { DefaultTheme } from "./types";

export const PRIMITIVE_COLORS = {
  primary50: "#F2F2F2",
  primary100: "#E6E6E6",
  primary200: "#C8C8C8",
  primary300: "#AEAEAE",
  primary400: "#939393",
  primary500: "#7B7B7B",
  primary600: "#636363",
  primary700: "#4C4C4C",
  primary800: "#363636",
  primary900: "#212121",
  white: "#F2F2F2",
  black: "#141414",

  error50: "#fbe0dd",
  error100: "#fbe0dd",
  error200: "#fcb5af",
  error300: "#fd8c85",
  error400: "#fd5b5d",
  error500: "#ee113a",
  error600: "#c30b2e",
  error700: "#990722",
  error800: "#760418",
  error900: "#46070a",

  positive50: "#D8FAEB",
  positive100: "#A3F7D6",
  positive200: "#62DAAF",
  positive300: "#52C19A",
  positive400: "#45A482",
  positive500: "#38896C",
  positive600: "#2C6F57",
  positive700: "#205643",
  positive800: "#174132",
  positive900: "#0D251C",

  warning50: "#FCF2E2",
  warning100: "#f7e3c8",
  warning200: "#f5b447",
  warning300: "E79301",
  warning400: "#bc8932",
  warning500: "#9d7229",
  warning600: "#855400",
  warning700: "#684500",
  warning800: "#4F3300",
  warning900: "#2C1D04",

  accent50: "#F0F2FB",
  accent100: "#E1E6FA",
  accent200: "#B8C8FA",
  accent300: "#90AEFA",
  accent400: "#4289F7",
  accent500: "#267BE9",
  accent600: "#1D64BF",
  accent700: "#144D96",
  accent800: "#0E3A73",
  accent900: "#0B2143",

  mono600: "#292929",
};

export const createColors = (): DefaultTheme => {
  return {
    primitives: {
      ...PRIMITIVE_COLORS,
      primaryA: PRIMITIVE_COLORS.primary200,
      primaryB: PRIMITIVE_COLORS.primary900,
    },
    overrides: {
      colors: {
        gray50: PRIMITIVE_COLORS.primary50,
        gray100: PRIMITIVE_COLORS.primary100,
        gray200: PRIMITIVE_COLORS.primary200,
        gray300: PRIMITIVE_COLORS.primary300,
        gray400: PRIMITIVE_COLORS.primary400,
        gray500: PRIMITIVE_COLORS.primary500,
        gray600: PRIMITIVE_COLORS.primary600,
        gray700: PRIMITIVE_COLORS.primary700,
        gray800: PRIMITIVE_COLORS.primary800,
        gray900: PRIMITIVE_COLORS.primary900,
      },
    },
  };
};
