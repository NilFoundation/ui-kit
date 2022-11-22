import { themes } from '@storybook/theming';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../src/styles/_all.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
        },
    },
    docs: {
        theme: themes.dark,
    },
}
