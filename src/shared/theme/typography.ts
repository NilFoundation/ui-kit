import { DefaultFonts, DefaultTheme } from "./types";

const getTypographyOverrides = (overrides: any = {}, monoStyles: any = {}) => {
  const monoOverrides: any = {};
  for (const typographyName in overrides) {
    monoOverrides[`Mono${typographyName}`] = {
      ...overrides[typographyName],
      ...monoStyles,
    };
  }
  return { ...overrides, ...monoOverrides };
};

export const createTypography = (defaultFonts?: DefaultFonts): DefaultTheme => {
  const defaultRegularFont = defaultFonts ? `${defaultFonts.defaultRegularFont}, sans-serif` : "";
  const defaultSemiBoldFont = defaultFonts ? `${defaultFonts.defaultSemiBoldFont}, sans-serif` : "";
  const defaultMonoRegularFont = defaultFonts ? `${defaultFonts.defaultMonoRegularFont}, monospace` : "";
  const defaultMediumFont = defaultFonts ? `${defaultFonts.defaultMediumFont}, sans-serif` : "";

  const defaultRegularFontProperty = defaultRegularFont ? { fontFamily: defaultRegularFont } : {};
  const defaultSemiBoldFontProperty = defaultSemiBoldFont ? { fontFamily: defaultSemiBoldFont } : {};
  const defaultMonoRegularFontProperty = defaultMonoRegularFont ? { fontFamily: defaultMonoRegularFont } : {};
  const defaultMediumFontProperty = defaultMediumFont ? { fontFamily: defaultMediumFont } : {};

  return {
    primitives: {
      primaryFontFamily: defaultRegularFont || undefined,
    },
    overrides: {
      typography: {
        ...getTypographyOverrides(
          {
            ParagraphXSmall: {
              ...defaultRegularFontProperty,
              fontSize: "12px",
              fontWeight: "normal",
              lineHeight: "16px",
            },
            ParagraphSmall: {
              ...defaultRegularFontProperty,
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "19px",
            },
            ParagraphMedium: {
              ...defaultRegularFontProperty,
              fontSize: "16px",
              fontWeight: "normal",
              lineHeight: "22px",
            },
            ParagraphLarge: {
              ...defaultRegularFontProperty,
              fontSize: "18px",
              fontWeight: "normal",
              lineHeight: "24px",
            },
          },
          defaultMonoRegularFontProperty
        ),

        ...getTypographyOverrides(
          {
            LabelXSmall: {
              ...defaultMediumFontProperty,
              fontSize: "10px",
              fontWeight: 500,
              lineHeight: "16px",
            },
            LabelSmall: {
              ...defaultMediumFontProperty,
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "16px",
            },
            LabelMedium: {
              ...defaultMediumFontProperty,
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
            },
            LabelLarge: {
              ...defaultMediumFontProperty,
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "24px",
            },
          },
          defaultMonoRegularFontProperty
        ),

        ...getTypographyOverrides(
          {
            HeadingSmall: {
              ...defaultMediumFontProperty,
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "16px",
            },
            HeadingMedium: {
              ...defaultMediumFontProperty,
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22px",
            },
            HeadingLarge: {
              ...defaultMediumFontProperty,
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "32px",
            },
            HeadingXLarge: {
              ...defaultMediumFontProperty,
              fontSize: "32px",
              fontWeight: 500,
              lineHeight: "40px",
            },
            HeadingXXLarge: {
              ...defaultMediumFontProperty,
              fontSize: "48px",
              fontWeight: 500,
              lineHeight: "56px",
            },
          },
          defaultMonoRegularFontProperty
        ),

        ...getTypographyOverrides(
          {
            DisplayXSmall: {
              ...defaultSemiBoldFontProperty,
              fontSize: "22px",
              fontWeight: 600,
              lineHeight: "28px",
            },
            DisplaySmall: {
              ...defaultSemiBoldFontProperty,
              fontSize: "44px",
              fontWeight: 600,
              lineHeight: "52px",
            },
            DisplayMedium: {
              ...defaultSemiBoldFontProperty,
              fontSize: "52px",
              fontWeight: 600,
              lineHeight: "64px",
            },
            DisplayLarge: {
              ...defaultSemiBoldFontProperty,
              fontSize: "96px",
              fontWeight: 600,
              lineHeight: "112px",
            },
          },
          defaultMonoRegularFontProperty
        ),

        MonoDisplayXSmall: {
          ...defaultMonoRegularFontProperty,
          fontSize: "22px",
          fontWeight: 400,
          lineHeight: "28px",
        },
      },
    },
  };
};
