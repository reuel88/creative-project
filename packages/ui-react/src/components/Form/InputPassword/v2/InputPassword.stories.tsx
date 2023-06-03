import { FC, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { VARIANT } from "../../../../constants";
import InputPasswordComponent from "./";
import { InputTemplateProps } from "../../InputTemplate/v2";

const InputPassword: FC<InputTemplateProps> = ({
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
      <InputPasswordComponent
        value={inputValue}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};

const meta: Meta<typeof InputPasswordComponent> = {
  title: "Components/Form/Input Password/V2",
  component: InputPasswordComponent,
  args: {
    description: "",
    errorMessage: "",
    isDisabled: false,
    isReadOnly: false,
    isRequired: false,
    label: "Input",
    name: "input",
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
