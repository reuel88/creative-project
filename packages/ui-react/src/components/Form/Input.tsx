import classNames from "classnames";
import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";

import styles from "./Input.module.css";

export interface InputProps {
  id: string;
  inputClasses?: string;
  value: string;
  type: HTMLInputTypeAttribute;
  onBlur: (e: ChangeEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: ChangeEvent) => void;
}

const Input: FC<InputProps> = ({
  id,
  inputClasses: newInputClasses,
  type,
  value,
  onBlur,
  onChange,
  onFocus,
  ...rest
}) => {
  const inputClasses = classNames(styles["input"], newInputClasses);

  return (
    <input
      className={inputClasses}
      id={id}
      type={type}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      {...rest}
    />
  );
};

export default Input;
