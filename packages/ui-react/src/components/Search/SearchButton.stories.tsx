import { SearchButton } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";

const SearchButtonWrapper: FC = () => {
  const handleClick = () => {
    console.log("hello");
  };

  return <SearchButton onClick={handleClick} />;
};

const meta: Meta<typeof SearchButtonWrapper> = {
  title: "Components/Search/Search Button",
  component: SearchButtonWrapper,
};

export default meta;

type Story = StoryObj<typeof SearchButtonWrapper>;

export const Primary: Story = {
  args: {},
};
