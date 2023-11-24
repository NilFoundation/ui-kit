import React from "react";
import { ThemeWrapper } from "../src/shared/theme";
import theme from "./theme";
import type { Decorator, Parameters } from "@storybook/react";

export const decorators: Decorator[] = [
  (Story) => (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  ),
];

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme,
  },
  options: {
    storySort: {
      order: ["Documentation"],
    },
    panelPosition: "right",
  },
};
