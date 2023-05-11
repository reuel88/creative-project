import { Counter } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Counter> = {
    title: "Components/Counter",
    component: Counter
}

export default meta

type Story = StoryObj<typeof Counter>

export const Primary: Story = {}