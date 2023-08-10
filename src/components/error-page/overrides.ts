import { BlockOverrides } from "baseui/block";

export const getErrorCodeOverrides = (): BlockOverrides => ({
  Block: {
    style: {
      fontSize: "230px",
      lineHeight: "340px",
      letterSpacing: "-0.04em",
    },
  },
});

export const getErrorDescriptionOverrides = (): BlockOverrides => ({
  Block: {
    style: {
      letterSpacing: "-0.01em",
    },
  },
});
