import { ChangeEvent, FC, HTMLInputTypeAttribute, SyntheticEvent } from "react";
import styles from "./Input.module.css";

export interface IInputProps {
  id: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onBlur: (e: SyntheticEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: SyntheticEvent) => void;
}

const Input: FC<IInputProps> = ({ ...rest }) => {
  return (
    <>
      <input className={styles["input"]} {...rest} />
    </>
  );
};

export default Input;
