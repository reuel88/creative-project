import { Meta, StoryObj } from "@storybook/react";
import { VARIANT } from "../../../constants";
import Button from "./";

const meta: Meta<typeof Button> = {
  title: "Components/Button/V2",
  component: Button,
  args: {
    children: "Button",
    className: "",
    isDisabled: false,
    variant: VARIANT.PRIMARY,
    onPress: () => console.log("Press"),
  },
  argTypes: {
    children: {
      type: { name: "string", required: true },
      table: {
        type: {
          summary: "ReactNode",
        },
        defaultValue: { summary: "undefined" },
      },
    },
    className: {
      type: { name: "string", required: false },
      description: "HTML class name",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "" },
      },
    },
    isDisabled: {
      type: { name: "boolean", required: false },
      description: "Disable Button",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: false },
      },
    },
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
    onPress: {
      type: { name: "function", required: true },
      description: "Used instead on onClick",
      table: {
        type: {
          summary: "() => void",
        },
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
