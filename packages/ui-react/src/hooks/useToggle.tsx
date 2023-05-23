import { useState } from "react";

type useToggleHook = (
  defaultValue: boolean
) => [boolean, (value?: boolean) => void];

const useToggle: useToggleHook = (defaultValue) => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggleValue = (value?: boolean) => {
    typeof value === "boolean"
      ? setValue(value)
      : setValue((currentValue) => !currentValue);
  };

  return [value, toggleValue];
};

export default useToggle;
