import { MenuModal } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MenuModal> = {
    title: "Components/Menu/Menu Modal",
    component: MenuModal
}

export default meta;

type Story = StoryObj<typeof MenuModal>;

export const Primary: Story = {}