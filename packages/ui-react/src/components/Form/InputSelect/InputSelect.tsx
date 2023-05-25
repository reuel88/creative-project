import { FC, Key, useMemo } from "react";
import Select, { Item, SelectProps } from "./Select";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type InputSelectProps = SelectProps & {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
};

const InputSelect: FC<InputSelectProps> = ({
  options,
  value,
  onChange,
  ...rest
}) => {
  const disabledKeys = useMemo(
    () =>
      options.reduce(
        (previousValue: string[], currentValue: SelectOption) =>
          currentValue.disabled
            ? [...previousValue, currentValue.value]
            : previousValue,
        []
      ),
    [options]
  );

  const handleChange = (selected: Key) => {
    onChange(selected as string);
    return selected as Key;
  };

  return (
    <Select
      items={options}
      selectedKey={value}
      onSelectionChange={handleChange}
      disabledKeys={disabledKeys}
      {...rest}
    >
      {(item) => <Item key={item.value}>{item.label}</Item>}
    </Select>
  );
};

export default InputSelect;
