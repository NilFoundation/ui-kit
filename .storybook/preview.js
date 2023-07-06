import { ThemeWrapper } from "../src/shared/theme";
import theme from './theme';

export const decorators = [
  (Story) => (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme
  },
  options: {
    storySort: {
      order: ['Documentation'],
    },
  }
};
