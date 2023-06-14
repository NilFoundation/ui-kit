import { ThemeWrapper } from "../src";
import { useEffect } from "react";

export const decorators = [
  (Story) => {
    useEffect(() => {
      const storyWrapper = document.querySelector(".docs-story");
      if (storyWrapper) {
        storyWrapper.style.backgroundColor = "#292929";
      }
    }, []);

    return (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "Dark",
    values: [{ name: "Dark", value: "#292929" }],
  },
};
