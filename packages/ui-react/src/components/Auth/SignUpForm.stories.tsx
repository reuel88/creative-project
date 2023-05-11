import { Meta, StoryObj } from "@storybook/react";
import SignUpForm from "./SignUpForm";

const meta: Meta<typeof SignUpForm> = {
    title: "Components/Auth/Sign Up Form",
    component: SignUpForm
}

export default meta;

type Story = StoryObj<typeof SignUpForm>;

export const Primary: Story = {}