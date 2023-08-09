import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
	staticDirs: ["../public"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-styling",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	core: {
		disableTelemetry: true,
	},
};

export default config;
