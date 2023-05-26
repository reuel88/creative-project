import { FC, useState } from "react";
import { ArgTypes, Meta, StoryObj } from "@storybook/react";
import { VARIANT } from "../../../../constants";
import InputEmailComponent from "./";
import { InputTemplateProps } from "../../InputTemplate/v2";
import argTypes from "../../argTypes";

const InputEmail: FC<InputTemplateProps> = ({
  value: defaultValue,
  onChange,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleChange = (value: string) => {
    setInputValue(value);
    if (typeof onChange === "function") onChange(value);
  };

  return (
    <div className="p-4">
      <InputEmailComponent
        value={inputValue}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};

const meta: Meta<typeof InputEmailComponent> = {
  title: "Components/Form/Input Email/V2",
  component: InputEmailComponent,
  args: {
    description: "",
    errorMessage: undefined,
    isDisabled: false,
    isReadOnly: false,
    isRequired: false,
    label: "Input",
    name: "input",
    value: "",
    variant: VARIANT.PRIMARY,
    onChange: (value) => console.log(value),
  },
  argTypes: argTypes.V2 as Partial<ArgTypes<InputTemplateProps>>,
};

export default meta;

type Story = StoryObj<typeof InputEmailComponent>;

export const Primary: Story = {
  render: (props) => <InputEmail {...props} />,
  args: {},
};

export const Secondary: Story = {
  render: (props) => <InputEmail {...props} />,
  args: {
    variant: "secondary",
  },
};
