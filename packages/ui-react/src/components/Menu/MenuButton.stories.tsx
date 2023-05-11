import { MenuButton } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MenuButton> = {
    title: "Components/Menu/Menu Button",
    component: MenuButton
}

export default meta;

type Story = StoryObj<typeof MenuButton>;

export const Primary: Story = {}