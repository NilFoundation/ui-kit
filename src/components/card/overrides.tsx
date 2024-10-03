import { CardOverrides } from "baseui/card";
import { withoutBorderStyles } from "../../shared/styles/borderStyles";
import { COLORS } from "../../shared";
import { withoutMarginStyles } from "../../shared/styles/withoutMarginStyles";
import { expandProperty } from "inline-style-expand-shorthand";

export const BorderStyle = expandProperty("border", "none");

export const getCardOverrides = (headline: boolean, border: boolean): CardOverrides => {
  return {
    Root: {
      style: {
        ...withoutBorderStyles,
        position: "relative",
        paddingRight: "16px",
        paddingLeft: "16px",
        paddingTop: headline ? "24px" : "16px",
        paddingBottom: "0px",
        boxSizing: "border-box",
        maxWidth: "328px",
        backgroundColor: COLORS.gray800,
        border: border ? `1px solid ${COLORS.gray700}` : `1px solid transparent`,
      },
    },
    HeaderImage: {
      style: {
        marginBottom: "16px",
      },
    },
    Contents: {
      style: {
        ...withoutMarginStyles,
      },
    },
    Thumbnail: {
      style: {
        ...BorderStyle,
        width: "94px",
        height: "94px",
        boxSizing: "borderBox",
        marginTop: "48px",
        marginLeft: "16px",
        marginBottom: "16px",
      },
    },
  };
};
