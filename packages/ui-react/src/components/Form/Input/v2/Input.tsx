import { forwardRef } from "react";
import styles from "../Input.module.css";
import { TextFieldAria } from "react-aria";

const Input = forwardRef<HTMLInputElement, TextFieldAria["inputProps"]>(
  (props, ref) => {
    return (
      <>
        <input ref={ref} className={styles["input"]} {...props} />
      </>
    );
  }
);

export default Input;
