import {
  ChangeEvent,
  forwardRef,
  HTMLInputTypeAttribute,
  SyntheticEvent,
} from "react";
import styles from "./Input.module.css";

export interface IInputProps {
  id: string;
  name: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onBlur: (e: SyntheticEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: SyntheticEvent) => void;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(({ ...rest }, ref) => {
  return (
    <>
      <input className={styles["input"]} ref={ref} {...rest} />
    </>
  );
});
export default Input;
