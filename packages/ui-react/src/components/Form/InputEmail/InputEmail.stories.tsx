import { ChangeEvent, FC, RefAttributes, useState } from "react";
import { ArgTypes, Meta, StoryObj } from "@storybook/react";
import { VARIANT } from "../../../constants";
import argTypes from "../argTypes";
import InputEmail, { TInputEmailProps } from "./InputEmail";

const InputWrapper: FC<TInputEmailProps> = ({
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
      <InputEmail value={value} onChange={handleChange} {...rest} />
    </div>
  );
};

const meta: Meta<typeof InputEmail> = {
  title: "Components/Form/Input Email/V1",
  component: InputEmail,
  args: {
    id: "input_text",
    label: "Input",
    error: "",
    value: "",
    variant: VARIANT.PRIMARY,
    onChange: (e) => console.log(e.target.value),
  },
  argTypes: argTypes as Partial<
    ArgTypes<TInputEmailProps & RefAttributes<HTMLInputElement>>
  >,
};

export default meta;

type Story = StoryObj<typeof InputEmail>;

export const Primary: Story = {
  render: (props) => <InputWrapper {...props} />,
  args: {},
};

export const Secondary: Story = {
  render: (props) => <InputWrapper {...props} />,
  args: {
    variant: VARIANT.SECONDARY,
  },
};
