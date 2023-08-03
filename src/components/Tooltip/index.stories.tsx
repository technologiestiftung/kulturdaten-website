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
