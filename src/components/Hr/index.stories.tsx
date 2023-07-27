import type { Meta, StoryObj } from "@storybook/react";
import Hr from ".";

const meta: Meta<typeof Hr> = {
	component: Hr,
};

export default meta;

type Story = StoryObj<typeof Hr>;

export const Default: Story = {
	args: {},
};

export const CustomHeight: Story = {
	args: {
		height: 5,
	},
};
