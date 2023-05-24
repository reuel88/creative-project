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
      type: { name: "string", required: false },
      description: "Styling; mainly the color scheme",
      options: [VARIANT.PRIMARY, VARIANT.SECONDARY],
      control: { type: "inline-radio" },
      table: {
        type: {
          summary: `${VARIANT.PRIMARY} | ${VARIANT.SECONDARY}`,
        },
        defaultValue: { summary: VARIANT.PRIMARY },
      },
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
