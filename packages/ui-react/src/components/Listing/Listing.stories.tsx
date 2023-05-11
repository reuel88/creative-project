import { Listing } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Listing> = {
  title: "Components/Listing",
  component: Listing,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    view: {
      options: ["list", "grid", "map", "inspect"],
      control: { type: "inline-radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Listing>;

export const Primary: Story = {
  args: {
    title: "Listing",
  },
};
