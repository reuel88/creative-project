import { SearchModal } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchModal> = {
    title: "Components/Search/Search Modal",
    component: SearchModal
}

export default meta;

type Story = StoryObj<typeof SearchModal>;

export const Primary: Story = {}