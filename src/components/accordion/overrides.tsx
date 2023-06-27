import { AccordionOverrides } from "baseui/accordion";

export const getAccordionOverrides = (): AccordionOverrides => {
  return {
    PanelContainer: {
      style: () => ({
        borderBottom: "none",
        marginTop: "4px",
      }),
    },
  };
};
