import { BlockOverrides } from "baseui/block";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

export const getErrorCodeOverrides = (): BlockOverrides => ({
  Block: {
    style: {
      fontSize: "250px",
      lineHeight: "250px",
      letterSpacing: "-0.08em",
      ...expandProperty("margin", "0"),
      background: PRIMITIVE_COLORS.primary800,
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
