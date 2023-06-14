import StyletronClient from "styletron-engine-atomic/lib/client/client";
import { Primitives } from "baseui/themes/types";

type CreateTheme = {
  primitives?: Partial<Primitives>;
  overrides?: any;
};

const getTypographyOverrides = (overrides: any = {}, monoFontName: string) => {
  const monoOverrides: any = {};
  for (const typographyName in overrides) {
    monoOverrides[`Mono${typographyName}`] = {
      ...overrides[typographyName],
      fontFamily: monoFontName,
    };
  }
  return { ...overrides, ...monoOverrides };
};

export const createTypography = (instance: StyletronClient): CreateTheme => {
  const InterRegular = instance.renderFontFace({
    src: 'url("/fonts/inter/Inter-Regular.ttf")',
    fontStyle: "normal",
    fontWeight: 400,
  });
  const InterSemiBold = instance.renderFontFace({
    src: 'url("/fonts/inter/Inter-SemiBold.ttf")',
    fontStyle: "normal",
    fontWeight: 600,
  });

  const RobotoMonoRegular = instance.renderFontFace({
    src: 'url("/fonts/roboto-mono/RobotoMono-Regular.ttf")',
    fontStyle: "normal",
    fontWeight: 400,
  });

  const interFontFamily = `${InterRegular}, sans-serif`;
  const interSemiBoldFontFamily = `${InterSemiBold}, sans-serif`;
  const robotoFontFamily = `${RobotoMonoRegular}, monospace`;

  return {
    primitives: {
      primaryFontFamily: interFontFamily,
    },
    overrides: {
      typography: {
        ...getTypographyOverrides(
          {
            ParagraphXSmall: {
              fontFamily: interFontFamily,
              fontSize: "12px",
              fontWeight: "normal",
              lineHeight: "20px",
            },
            ParagraphSmall: {
              fontFamily: interFontFamily,
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "20px",
            },
            ParagraphMedium: {
              fontFamily: interFontFamily,
              fontSize: "16px",
              fontWeight: "normal",
              lineHeight: "24px",
            },
            ParagraphLarge: {
              fontFamily: interFontFamily,
              fontSize: "18px",
              fontWeight: "normal",
              lineHeight: "28px",
            },
          },
          robotoFontFamily
        ),

        ...getTypographyOverrides(
          {
            LabelXSmall: {
              fontFamily: interFontFamily,
              fontSize: "12px",
              fontWeight: "normal",
              lineHeight: "16px",
            },
            LabelSmall: {
              fontFamily: interFontFamily,
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "16px",
            },
            LabelMedium: {
              fontFamily: interFontFamily,
              fontSize: "16px",
              fontWeight: "normal",
              lineHeight: "20px",
            },
            LabelLarge: {
              fontFamily: interFontFamily,
              fontSize: "18px",
              fontWeight: "normal",
              lineHeight: "24px",
            },
          },
          robotoFontFamily
        ),

        ...getTypographyOverrides(
          {
            HeadingXSmall: {
              fontFamily: interFontFamily,
              fontSize: "20px",
              fontWeight: "normal",
              lineHeight: "28px",
            },
            HeadingSmall: {
              fontFamily: interFontFamily,
              fontSize: "24px",
              fontWeight: "normal",
              lineHeight: "32px",
            },
            HeadingMedium: {
              fontFamily: interFontFamily,
              fontSize: "28px",
              fontWeight: "normal",
              lineHeight: "36px",
            },
            HeadingLarge: {
              fontFamily: interFontFamily,
              fontSize: "32px",
              fontWeight: "normal",
              lineHeight: "40px",
            },
            HeadingXLarge: {
              fontFamily: interFontFamily,
              fontSize: "36px",
              fontWeight: "normal",
              lineHeight: "44px",
            },
            HeadingXXLarge: {
              fontFamily: interFontFamily,
              fontSize: "40px",
              fontWeight: "normal",
              lineHeight: "52px",
            },
          },
          robotoFontFamily
        ),

        ...getTypographyOverrides(
          {
            DisplayXSmall: {
              fontFamily: interSemiBoldFontFamily,
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "32px",
            },
            DisplaySmall: {
              fontFamily: interSemiBoldFontFamily,
              fontSize: "44px",
              fontWeight: 600,
              lineHeight: "52px",
            },
            DisplayMedium: {
              fontFamily: interSemiBoldFontFamily,
              fontSize: "52px",
              fontWeight: 600,
              lineHeight: "64px",
            },
            DisplayLarge: {
              fontFamily: interSemiBoldFontFamily,
              fontSize: "96px",
              fontWeight: 600,
              lineHeight: "112px",
            },
          },
          robotoFontFamily
        ),

        MonoDisplayXSmall: {
          fontFamily: robotoFontFamily,
          fontSize: "36px",
          fontWeight: 400,
          lineHeight: "44px",
        },
      },
    },
  };
};
