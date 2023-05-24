import { Meta, StoryObj } from "@storybook/react";
import { VARIANT } from "../../constants";
import Button from "./";

const meta: Meta<typeof Button> = {
  title: "Components/Button/V1",
  component: Button,
  args: {
    children: "Button",
    variant: VARIANT.PRIMARY,
  },
  argTypes: {
    variant: {
      options: [VARIANT.PRIMARY, VARIANT.SECONDARY],
      control: { type: "inline-radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
