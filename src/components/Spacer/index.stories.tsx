import type { Meta, StoryObj } from "@storybook/react";
import Spacer from ".";

const meta: Meta<typeof Spacer> = {
	component: Spacer,
};

export default meta;

type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
	args: {
		size: 20,
	},
};
