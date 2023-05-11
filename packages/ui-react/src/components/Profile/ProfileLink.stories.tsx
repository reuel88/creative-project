import { ProfileLink } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileLink> = {
  title: "Components/Profile/Profile Link",
  component: ProfileLink,
  args: {
    href: "/",
  },
};

export default meta;

type Story = StoryObj<typeof ProfileLink>;

export const Primary: Story = {};
