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

export const ButtonLink: Story = {
	args: {
		children: "I am a link that looks like a button with an icon",
		as: "a",
		href: "https://www.berlin.de/",
		target: "_blank",
		icon: "play",
	},
};
