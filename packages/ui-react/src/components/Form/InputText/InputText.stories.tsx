import { FC } from "react";
import InputText, { TInputTextProps } from "./InputText";
import { Meta, StoryObj } from "@storybook/react";

const InputWrapper: FC<TInputTextProps> = ({ ...rest }) => {
  return (
    <div className="p-4">
      <InputText {...rest} />
    </div>
  );
};

const meta: Meta<typeof InputWrapper> = {
  title: "Components/Form/Input Text",
  component: InputWrapper,
  args: {
    id: "input_text",
    label: "Input",
    error: "",
  },
};

export default meta;

type Story = StoryObj<typeof InputWrapper>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
