import { CardOverrides } from "baseui/card";
import { BorderRadiusStyles } from "../../shared/styles/border";
import { PRIMITIVE_COLORS } from "../../shared";
import { MarginStyles } from "../../shared/styles/margin";
import { expandProperty } from "inline-style-expand-shorthand";

export const BorderStyle = expandProperty("border", "none");

export const getCardOverrides = (headline: boolean, border: boolean): CardOverrides => {
  return {
    Root: {
      style: {
        ...BorderRadiusStyles,
        position: "relative",
        paddingRight: "16px",
        paddingLeft: "16px",
        paddingTop: headline ? "24px" : "16px",
        paddingBottom: "0px",
        boxSizing: "border-box",
        maxWidth: "328px",
        backgroundColor: PRIMITIVE_COLORS.gray800,
        border: border ? `1px solid ${PRIMITIVE_COLORS.gray700}` : `1px solid transparent`,
      },
    },
    HeaderImage: {
      style: {
        marginBottom: "16px",
      },
    },
    Contents: {
      style: {
        ...MarginStyles,
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
