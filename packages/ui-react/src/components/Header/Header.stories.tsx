import { Header } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
    title: "Components/Header",
    component: Header
}

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
    args: {}
}