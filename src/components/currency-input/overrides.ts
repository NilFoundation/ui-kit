import { InputOverrides } from "baseui/input";

export const inputOverrides: InputOverrides = {
  Input: {
    style: {
      "::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
      "::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
      "-moz-appearance": "textfield",
    },
  },
};

export const selectOverrides = {
  ControlContainer: {
    style: {
      width: "100px",
      backgroundColor: "transparent",
      boxShadow: "none",
      ":has(input:focus-within)": {
        boxShadow: "none",
      },
      ":hover": {
        backgroundColor: "transparent",
      },
    },
  },
};
