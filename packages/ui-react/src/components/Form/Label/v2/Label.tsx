import classNames from "classnames";
import { forwardRef } from "react";
import styles from "../Label.module.css";
import { TextFieldAria } from "react-aria";

type LabelProps = TextFieldAria["labelProps"] & {
  hasError: boolean;
  isActive: boolean;
};

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ hasError, isActive, ...rest }, ref) => {
    const labelClasses = classNames(styles["label"], {
      [styles["label--active"]]: isActive,
      [styles["error"]]: hasError,
    });

    return (
      <>
        <label className={labelClasses} ref={ref} {...rest} />
      </>
    );
  }
);

export default Label;
