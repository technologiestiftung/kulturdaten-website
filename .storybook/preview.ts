import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import GlobalStyles from "../src/components/GlobalStyles";

export const decorators = [
	withThemeFromJSXProvider({
		GlobalStyles: GlobalStyles,
	}),
];

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
