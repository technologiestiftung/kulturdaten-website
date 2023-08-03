import type { Meta, StoryObj } from "@storybook/react";
import ButtonWithIcon from ".";

const meta: Meta<typeof ButtonWithIcon> = {
	component: ButtonWithIcon,
};

export default meta;

type Story = StoryObj<typeof ButtonWithIcon>;

export const Default: Story = {
	args: {
		children: "I am a button with an icon",
		icon: "play",
		onClick: () => window.alert("You clicked the button!"),
	},
};
