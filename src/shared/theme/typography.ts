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

  const defaultRegularFontProperty = defaultRegularFont ? { fontFamily: defaultRegularFont } : {};
  const defaultSemiBoldFontProperty = defaultSemiBoldFont ? { fontFamily: defaultSemiBoldFont } : {};
  const defaultMonoRegularFontProperty = defaultMonoRegularFont ? { fontFamily: defaultMonoRegularFont } : {};

  return {
    primitives: {
      grayFontFamily: defaultRegularFont || undefined,
    },
    overrides: {
      typography: {
        ...getTypographyOverrides(
          {
            ParagraphXSmall: {
              ...defaultRegularFontProperty,
              fontSize: "12px",
              fontWeight: "normal",
              lineHeight: "20px",
            },
            ParagraphSmall: {
              ...defaultRegularFontProperty,
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "20px",
            },
            ParagraphMedium: {
              ...defaultRegularFontProperty,
              fontSize: "16px",
              fontWeight: "normal",
              lineHeight: "24px",
            },
            ParagraphLarge: {
              ...defaultRegularFontProperty,
              fontSize: "18px",
              fontWeight: "normal",
              lineHeight: "28px",
            },
          },
          defaultMonoRegularFontProperty
        ),

        ...getTypographyOverrides(
          {
            LabelXSmall: {
              ...defaultRegularFontProperty,
              fontSize: "12px",
              fontWeight: "normal",
              lineHeight: "16px",
            },
            LabelSmall: {
              ...defaultRegularFontProperty,
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "16px",
            },
            LabelMedium: {
              ...defaultRegularFontProperty,
              fontSize: "16px",
              fontWeight: "normal",
              lineHeight: "20px",
            },
            LabelLarge: {
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
            HeadingXSmall: {
              ...defaultRegularFontProperty,
              fontSize: "20px",
              fontWeight: "normal",
              lineHeight: "28px",
            },
            HeadingSmall: {
              ...defaultRegularFontProperty,
              fontSize: "24px",
              fontWeight: "normal",
              lineHeight: "32px",
            },
            HeadingMedium: {
              ...defaultRegularFontProperty,
              fontSize: "28px",
              fontWeight: "normal",
              lineHeight: "36px",
            },
            HeadingLarge: {
              ...defaultRegularFontProperty,
              fontSize: "32px",
              fontWeight: "normal",
              lineHeight: "40px",
            },
            HeadingXLarge: {
              ...defaultRegularFontProperty,
              fontSize: "36px",
              fontWeight: "normal",
              lineHeight: "44px",
            },
            HeadingXXLarge: {
              ...defaultRegularFontProperty,
              fontSize: "40px",
              fontWeight: "normal",
              lineHeight: "52px",
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
