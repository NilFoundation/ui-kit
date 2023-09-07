import { BlockOverrides } from "baseui/block";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";
import { desktopMediaQuery, mobileMediaQuery } from "./styles";

export const getErrorCodeOverrides = (): BlockOverrides => ({
  Block: {
    style: {
      letterSpacing: "-0.08em",
      ...expandProperty("margin", "0"),
      background: PRIMITIVE_COLORS.gray800,
      [desktopMediaQuery]: {
        height: "calc(100vh / 2.25)",
        lineHeight: "calc(100vh / 2.25)",
        fontSize: "calc(100vw / 5)",
      },
      [mobileMediaQuery]: {
        fontSize: "calc(100vw / 1.75)",
        lineHeight: "calc(100vw / 1.75)",
      },
    },
  },
});

export const getErrorDescriptionOverrides = (): BlockOverrides => ({
  Block: {
    style: {
      letterSpacing: "-0.05em",
      ...expandProperty("padding", "30px"),
      ...expandProperty("margin", "0"),
    },
  },
});

export const getRedirectOverrides = (): BlockOverrides => ({
  Block: {
    style: {
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      ...expandProperty("margin", "20px"),
    },
  },
});
