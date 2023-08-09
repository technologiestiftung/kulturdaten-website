import type { Meta, StoryObj } from "@storybook/react";
import Link from ".";

const meta: Meta<typeof Link> = {
	component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
	args: {
		href: "https://www.technologiestiftung-berlin.de/",
		children: "I am a link",
	},
};
