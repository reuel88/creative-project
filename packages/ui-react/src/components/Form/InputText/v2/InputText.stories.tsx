import { FC, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { VARIANT } from "../../../../constants";
import InputText from "./";
import { InputTemplateProps } from "../../InputTemplate/v2";

const InputWrapper: FC<InputTemplateProps> = ({
  value: defaultValue,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  return (
    <div className="p-4">
      <InputText value={inputValue} onChange={setInputValue} {...rest} />
    </div>
  );
};

const meta: Meta<typeof InputText> = {
  title: "Components/Form/Input Text/V2",
  component: InputText,
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

type Story = StoryObj<typeof InputText>;

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
