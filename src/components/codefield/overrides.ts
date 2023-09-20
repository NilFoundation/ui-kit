import { expandProperty } from "inline-style-expand-shorthand";

export const getCopyButtonOverrides = () => {
  return {
    BaseButton: {
      style: {
        ...expandProperty("padding", "4px"),
        ...expandProperty("borderRadius", "2px"),
      },
    },
  };
};
