import { FC, Key, useMemo } from "react";
import SelectTemplate, {
  Item,
  SelectOption,
  SelectTemplateProps,
} from "./SelectTemplate";

export type InputSelectProps = Omit<SelectTemplateProps, "children"> & {
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
    <SelectTemplate
      items={options}
      selectedKey={value}
      onSelectionChange={handleChange}
      disabledKeys={disabledKeys}
      {...rest}
    >
      {(item) => <Item key={item.value}>{item.label}</Item>}
    </SelectTemplate>
  );
};

export default InputSelect;
