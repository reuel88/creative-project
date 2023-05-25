import { VARIANT } from "../../constants";

const argTypes = {
  id: {
    type: { name: "string", required: true },
    description: "Unique input id",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  label: {
    type: { name: "string", required: true },
    description: "Unique input id",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  error: {
    type: { name: "string", required: true },
    description: "ErrorMessage string",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  value: {
    type: { name: "string", required: true },
    description: "Input value",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  variant: {
    type: { name: "string", required: false },
    description: "Input styling; mainly the color scheme",
    options: [VARIANT.PRIMARY, VARIANT.SECONDARY],
    control: { type: "inline-radio" },
    table: {
      type: {
        summary: `${VARIANT.PRIMARY} | ${VARIANT.SECONDARY}`,
      },
      defaultValue: { summary: VARIANT.PRIMARY },
    },
  },
  onChange: {
    type: { name: "function", required: true },
    table: {
      type: {
        summary: "() => void",
      },
    },
  },
};

export default argTypes;
