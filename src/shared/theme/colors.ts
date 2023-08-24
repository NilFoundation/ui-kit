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

  error50: "#F9F0EF",
  error100: "#F4E2DF",
  error200: "#EDBCB4",
  error300: "#E7998E",
  error400: "#DE665C",
  error500: "#CF4E47",
  error600: "#A93E39",
  error700: "#842F2A",
  error800: "#65221E",
  error900: "#3B1411",

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

  warning50: "#FAF1E5",
  warning100: "#F7E3C8",
  warning200: "#F5B447",
  warning300: "#DDA23D",
  warning400: "#BC8932",
  warning500: "#9D7229",
  warning600: "#805C1F",
  warning700: "#634716",
  warning800: "#4B3510",
  warning900: "#2A1F0D",

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
