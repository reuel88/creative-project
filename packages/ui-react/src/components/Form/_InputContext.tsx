import {
  ChangeEvent,
  ComponentType,
  createContext,
  HTMLInputTypeAttribute,
  useContext,
  useEffect,
  useState,
} from "react";
import { VARIANT } from "../../constants";

interface IInputDefault {
  leftComponent?: ComponentType<{ className?: string }>;
  rightComponent?: ComponentType<{ className?: string }>;
  id: string;
  label: string;
  value: string;
  variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY;
}

export interface IInputProps extends IInputDefault {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface IInputContext extends IInputDefault {
  labelActive: boolean;
  type: HTMLInputTypeAttribute;
  handleBlur: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
}

type TUseInputContext = (
  props: IInputProps & { type: HTMLInputTypeAttribute }
) => IInputContext;

const InputContext = createContext({} as IInputContext);

export const useInput = () => {
  return useContext(InputContext);
};

export const useInputContext: TUseInputContext = ({
  value,
  variant = VARIANT.PRIMARY,
  onChange,
  ...rest
}) => {
  const [flag, setFlag] = useState(false);
  const [labelActive, setLabelActive] = useState(false);

  useEffect(() => {
    !flag && setLabelActive(value.trim().length > 0);
  }, [value, flag]);

  const handleBlur = () => {
    setFlag(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleFocus = () => {
    setLabelActive(true);
    setFlag(true);
  };

  return {
    labelActive,
    value,
    variant,
    handleBlur,
    handleChange,
    handleFocus,
    ...rest,
  };
};

export const withInput = <
  P extends IInputProps & { type: HTMLInputTypeAttribute }
>(
  Component: ComponentType
) => {
  return (props: P) => {
    const context = useInputContext(props);

    return (
      <InputContext.Provider value={context}>
        <Component />
      </InputContext.Provider>
    );
  };
};

export default InputContext;
