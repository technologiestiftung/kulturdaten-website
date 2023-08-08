import type { Meta, StoryObj } from "@storybook/react";
import Text from ".";

const meta: Meta<typeof Text> = {
	component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const P: Story = {
	args: {
		type: "p",
		children: "I’m a paragraph.",
	},
};

export const H1: Story = {
	args: {
		type: "h1",
		children: "I’m a headline.",
	},
};

export const H2: Story = {
	args: {
		type: "h2",
		children: "I’m a headline.",
	},
};

export const H3: Story = {
	args: {
		type: "h3",
		children: "I’m a headline.",
	},
};

export const Color: Story = {
	args: {
		type: "p",
		color: "turquoise",
		children: "I’m a headline in a custom color.",
	},
};
