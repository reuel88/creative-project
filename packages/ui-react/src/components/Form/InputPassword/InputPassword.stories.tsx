import { ChangeEvent, FC, RefAttributes, useState } from "react";
import { ArgTypes, Meta, StoryObj } from "@storybook/react";
import { VARIANT } from "../../../constants";
import argTypes from "../argTypes";
import {
  default as InputPasswordComponent,
  TInputPasswordProps,
} from "./InputPassword";

const InputPassword: FC<TInputPasswordProps> = ({
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
      <InputPasswordComponent value={value} onChange={handleChange} {...rest} />
    </div>
  );
};

const meta: Meta<typeof InputPasswordComponent> = {
  title: "Components/Form/Input Password/V1",
  component: InputPasswordComponent,
  args: {
    id: "input_text",
    label: "Input",
    error: "",
    value: "",
    variant: VARIANT.PRIMARY,
    onChange: (e) => console.log(e.target.value),
  },
  argTypes: argTypes as Partial<
    ArgTypes<TInputPasswordProps & RefAttributes<HTMLInputElement>>
  >,
};

export default meta;

type Story = StoryObj<typeof InputPasswordComponent>;

export const Primary: Story = {
  render: (props) => <InputPassword {...props} />,
  args: {},
};

export const Secondary: Story = {
  render: (props) => <InputPassword {...props} />,
  args: {
    variant: "secondary",
  },
};
