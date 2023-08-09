import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from ".";

const meta: Meta<typeof Tooltip> = {
	component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	args: {
		children: "Trigger me!",
		tooltip: "Here’s a tooltip.",
		id: "test-id",
	},
};

export const TooltipWithHTMLContent: Story = {
	args: {
		children: "Trigger me!",
		tooltip: 'Here’s a tooltip with HTML content: <a href="https://www.berlin.de/" target="_blank">berlin.de</a>',
		tooltipAsHTML: true,
		clickable: true,
		id: "test-id",
	},
};
