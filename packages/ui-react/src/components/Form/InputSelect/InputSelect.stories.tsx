import InputSelectComponent, { InputSelectProps } from "./InputSelect";
import { Meta, StoryObj } from "@storybook/react";
import { FC, useState } from "react";
import { VARIANT } from "../../../constants";

const InputSelect: FC<InputSelectProps> = ({
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
      <InputSelectComponent
        value={inputValue}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};

const meta: Meta<typeof InputSelectComponent> = {
  title: "Components/Form/Input Select",
  component: InputSelectComponent,
  args: {
    description: "",
    errorMessage: "",
    isDisabled: false,
    label: "Input",
    options: [
      { value: "1", label: "Durward Reynolds" },
      { value: "2", label: "Kenton Towne" },
      { value: "3", label: "Therese Wunsch" },
      { value: "4", label: "Benedict Kessler", disabled: true },
      { value: "5", label: "Katelyn Rohan" },
    ],
    value: "",
    variant: VARIANT.PRIMARY,
    onChange: (value) => console.log(value),
  },
  argTypes: {
    isDisabled: {
      type: { name: "boolean", required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    variant: {
      type: { name: "string", required: false },
      description: "Styling; mainly the color scheme",
      options: [VARIANT.PRIMARY, VARIANT.SECONDARY],
      control: { type: "inline-radio" },
      table: {
        type: {
          summary: `${VARIANT.PRIMARY} | ${VARIANT.SECONDARY}`,
        },
        defaultValue: { summary: VARIANT.PRIMARY },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputSelectComponent>;

export const Primary: Story = {
  render: (args) => <InputSelect {...args} />,
};

export const Secondary: Story = {
  render: (args) => <InputSelect {...args} />,
  args: {
    variant: VARIANT.SECONDARY,
  },
};
