import { InputPasswordWithRequirements } from "../index";
import { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, FC, useState } from "react";
import { IInputProps } from "../_InputContext";
import { VARIANT } from "../../../constants";

const InputPasswordWithRequirementsWrapper: FC<IInputProps> = ({
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

const meta: Meta<typeof InputPasswordWithRequirementsWrapper> = {
  title: "Components/Form/Input Password with Requirements",
  component: InputPasswordWithRequirementsWrapper,
  args: {
    id: "input_text",
    label: "Input",
    value: "",
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

type Story = StoryObj<typeof InputPasswordWithRequirementsWrapper>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
