import { ChangeEvent, FC, RefAttributes, useState } from "react";
import { ArgTypes, Meta, StoryObj } from "@storybook/react";
import { VARIANT } from "../../../constants";
import argTypes from "../argTypes";
import InputPasswordWithRequirements from "./InputPasswordWithRequirements";
import { TInputPasswordProps } from "../InputPassword";

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
      <InputPasswordWithRequirements
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};

const meta: Meta<typeof InputPasswordWithRequirements> = {
  title: "Components/Form/Input Password/with Requirements",
  component: InputPasswordWithRequirements,
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

type Story = StoryObj<typeof InputPasswordWithRequirements>;

export const Primary: Story = {
  render: (props) => <InputWrapper {...props} />,
  args: {},
};

export const Secondary: Story = {
  render: (props) => <InputWrapper {...props} />,
  args: {
    variant: "secondary",
  },
};
