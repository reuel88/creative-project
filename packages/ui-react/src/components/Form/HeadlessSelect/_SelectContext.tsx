import { createContext, MutableRefObject, useContext, useRef } from "react";
import { ProvidersProps } from "./Providers";
import { Option, SelectOption } from "./Option";

type context = {
  options: MutableRefObject<SelectOption[]>;
  value: SelectOption | SelectOption[];
  clearValue: () => void;
  isSelected: (option: SelectOption) => boolean;
  toggleByIndex: (index: number) => void;
  toggleValue: (option: SelectOption) => void;
};

const SelectContext = createContext({} as context);

export const useSelectContext = () => {
  return useContext(SelectContext);
};

type SelectProviderValueHook = ({
  multiple,
  value,
  onChange,
}: ProvidersProps) => context;

export const useSelectProviderValue: SelectProviderValueHook = ({
  multiple = false,
  value,
  onChange,
}) => {
  const options = useRef([] as Option[]);

  const clearValue = () => {
    onChange(!multiple ? "" : []);
  };

  const toggleValue = (option: SelectOption) => {
    let result: SelectOption | SelectOption[] = "";

    if (!multiple && typeof value === "string") {
      // not multiple
      result = value === option ? "" : option;
    } else if (Array.isArray(value)) {
      // multiple
      result = value.includes(option)
        ? value.filter((val) => val !== option)
        : [...value, option];
    }

    onChange(result);
  };

  const toggleByIndex = (index: number) => {
    if (!options.current[index].disabled)
      toggleValue(options.current[index].value);
  };

  const isSelected = (option: SelectOption) => {
    return !multiple
      ? typeof value === "string" && option === value
      : Array.isArray(value) && value.includes(option);
  };

  return {
    options,
    value,
    clearValue,
    isSelected,
    toggleByIndex,
    toggleValue,
  };
};

export default SelectContext;
