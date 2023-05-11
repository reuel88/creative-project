import { Hero } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Primary: Story = {
  args: {},
};
