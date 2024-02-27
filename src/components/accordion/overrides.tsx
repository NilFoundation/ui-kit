import { AccordionOverrides } from "baseui/accordion";
import { expandProperty } from "inline-style-expand-shorthand";

export const getAccordionOverrides = (): AccordionOverrides => {
  return {
    PanelContainer: {
      style: () => ({
        ...expandProperty("borderBottom", "none"),
        marginTop: "4px",
      }),
    },
  };
};
