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
    description: "Error message string",
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

const V2 = {
  errorMessage: {
    type: { name: "string", required: false },
    description: "Error message string",
    table: {
      type: {
        summary: "string | undefined",
      },
    },
  },
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
};

export default Object.assign(argTypes, {
  V1: argTypes,
  V2,
});
