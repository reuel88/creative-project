import { ChangeEvent, FC, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { VARIANT } from "../../../constants";
import InputPassword, { TInputPasswordProps } from "./InputPassword";

const InputWrapper: FC<TInputPasswordProps> = ({
  value: defaultValue,
  onChange,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (typeof onChange === "function") onChange(e);
  };

  return (
    <div className="p-4">
      <InputPassword value={value} onChange={handleChange} {...rest} />
    </div>
  );
};

const meta: Meta<typeof InputWrapper> = {
  title: "Components/Form/Input Password",
  component: InputWrapper,
  args: {
    id: "input_text",
    label: "Input",
    error: "",
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

type Story = StoryObj<typeof InputWrapper>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
