import { Meta, StoryObj } from "@storybook/react";
import SignInForm from "./SignInForm";

const meta: Meta<typeof SignInForm> = {
  title: "Components/Auth/Sign In Form",
  component: SignInForm,
};

export default meta;

type Story = StoryObj<typeof SignInForm>;

export const Primary: Story = {};
