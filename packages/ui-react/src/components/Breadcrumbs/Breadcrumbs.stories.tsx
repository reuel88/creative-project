import { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs from "./index";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <Breadcrumbs.Item href="/">
        <span>Home</span>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href="/">
        <span>Search</span>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <span>Reuel</span>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};
