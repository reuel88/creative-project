import { ChangeEvent, FC, RefAttributes, useState } from "react";
import { ArgTypes, Meta, StoryObj } from "@storybook/react";
import { VARIANT } from "../../../constants";
import argTypes from "../argTypes";
import InputTextComponent, { TInputTextProps } from "./InputText";

const InputText: FC<TInputTextProps> = ({
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
      <InputTextComponent value={value} onChange={handleChange} {...rest} />
    </div>
  );
};

const meta: Meta<typeof InputTextComponent> = {
  title: "Components/Form/Input Text/V1",
  component: InputTextComponent,
  args: {
    id: "input_text",
    label: "Input",
    error: "",
    value: "",
    variant: VARIANT.PRIMARY,
    onChange: (e) => console.log(e.target.value),
  },
  argTypes: argTypes as Partial<
    ArgTypes<TInputTextProps & RefAttributes<HTMLInputElement>>
  >,
};

export default meta;

type Story = StoryObj<typeof InputTextComponent>;

export const Primary: Story = {
  render: (props) => <InputText {...props} />,
  args: {},
};

export const Secondary: Story = {
  render: (props) => <InputText {...props} />,
  args: {
    variant: "secondary",
  },
};
