import { BackButton } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BackButton> = {
  title: "Components/Back Button",
  component: BackButton,
  args: {
    href: "/",
  },
};

export default meta;

type Story = StoryObj<typeof BackButton>;

export const Primary: Story = {};
