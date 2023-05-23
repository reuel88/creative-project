import { ActionContextProvider } from "./_ActionContext";
import Select from "./Select";
import SelectContext, { useSelectProviderValue } from "./_SelectContext";
import { FC } from "react";
import { SelectOption } from "./Option";

export type ProvidersProps = {
  multiple: boolean;
  value: SelectOption | SelectOption[];
  onChange: (options: SelectOption | SelectOption[]) => void;
};

const Providers: FC<ProvidersProps> = ({
  multiple,
  value,
  onChange,
  ...rest
}) => {
  const selectProviderValue = useSelectProviderValue({
    multiple,
    value,
    onChange,
  });

  return (
    <SelectContext.Provider value={selectProviderValue}>
      <ActionContextProvider>
        <Select {...rest} />
      </ActionContextProvider>
    </SelectContext.Provider>
  );
};

export default Providers;
