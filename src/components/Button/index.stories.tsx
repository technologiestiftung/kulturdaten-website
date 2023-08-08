import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
	component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "I am a button",
		onClick: () => window.alert("You clicked the button!"),
	},
};

export const ButtonLink: Story = {
	args: {
		children: "I am a a link that looks like a button",
		href: "https://www.berlin.de/",
		target: "_blank",
	},
};
