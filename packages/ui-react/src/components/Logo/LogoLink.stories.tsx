import { LogoLink } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LogoLink> = {
    title: "Components/Logo/Logo Link",
    component: LogoLink
}

export default meta;

type Story = StoryObj<typeof LogoLink>;

export const Primary: Story = {}