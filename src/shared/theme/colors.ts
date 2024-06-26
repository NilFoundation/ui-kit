import { DefaultTheme } from "./types";

export const COLORS = {
  gray50: "#F1F1F1",
  gray100: "#D6D6D6",
  gray200: "#BDBDBD",
  gray300: "#A3A3A3",
  gray400: "#8A8A8A",
  gray500: "#727272",
  gray600: "#5B5B5B",
  gray700: "#444444",
  gray800: "#2F2F2F",
  gray900: "#212121",
  black: "#0F0F0F",

  red50: "#FBEBEC",
  red100: "#FBC0C4",
  red200: "#FD949B",
  red300: "#FD6670",
  red400: "#FC3642",
  red500: "#D9121F",
  red600: "#B30D18",
  red700: "#8A0810",
  red800: "#62060C",
  red900: "#340609",

  purple50: "#F4EEFB",
  purple100: "#E2CEFC",
  purple200: "#D2AFFF",
  purple300: "#C08FFF",
  purple400: "#AE6FFF",
  purple500: "#9748FF",
  purple600: "#8426FF",
  purple700: "#6200E1",
  purple800: "#47049F",
  purple900: "#2C0560",

  blue50: "#EFF4FB",
  blue100: "#CEE0FB",
  blue200: "#ADCDFD",
  blue300: "#87B6FC",
  blue400: "#589AFC",
  blue500: "#1567E3",
  blue600: "#1056C0",
  blue700: "#094194",
  blue800: "#0A3068",
  blue900: "#091E3E",

  green50: "#D3F9EE",
  green100: "#73ECC8",
  green200: "#5AD2AE",
  green300: "#4DB596",
  green400: "#40997E",
  green500: "#347F69",
  green600: "#286653",
  green700: "#1C4D3E",
  green800: "#13352B",
  green900: "#0C1F19",

  yellow50: "#FCF6DE",
  yellow100: "#FCE389",
  yellow200: "#F9C406",
  yellow300: "#D7A904",
  yellow400: "#B79003",
  yellow500: "#977702",
  yellow600: "#7A6001",
  yellow700: "#5D4901",
  yellow800: "#403303",
  yellow900: "#241D05",

  orange50: "#FCF6DE",
  orange100: "#FCE389",
  orange200: "#F9C406",
  orange300: "#D7A904",
  orange400: "#B79003",
  orange500: "#977702",
  orange600: "#7A6001",
  orange700: "#5D4901",
  orange800: "#403303",
  orange900: "#241D05",
} as const;

/**
 * @deprecated
 * Use `COLORS` instead.
 */
export const PRIMITIVE_COLORS = { ...COLORS };

export const createColors = (): DefaultTheme => {
  return {
    primitives: {
      ...COLORS,
      primaryA: COLORS.gray200,
      primaryB: COLORS.gray900,
    },
    overrides: {
      colors: {
        gray50: COLORS.gray50,
        gray100: COLORS.gray100,
        gray200: COLORS.gray200,
        gray300: COLORS.gray300,
        gray400: COLORS.gray400,
        gray500: COLORS.gray500,
        gray600: COLORS.gray600,
        gray700: COLORS.gray700,
        gray800: COLORS.gray800,
        gray900: COLORS.gray900,
      },
    },
  };
};
