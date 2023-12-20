import { StyleObject } from "styletron-standard";
import { expandProperty } from "inline-style-expand-shorthand";
import { PRIMITIVE_COLORS } from "../theme";

const styles: StyleObject = {
  ...expandProperty("transition", "background-color 5000s ease-in-out 0s"),
  ...expandProperty("boxShadow", "inset 0 0 20px 20px #23232329"),
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": PRIMITIVE_COLORS.gray50,
};

export const resetAutoCompleteStyles = {
  ":-webkit-autofill": styles,
  ":-webkit-autofill:hover": styles,
  ":-webkit-autofill:focus": styles,
  ":-webkit-autofill:active": styles,
};
