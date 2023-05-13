import classNames from "classnames";
import { FC } from "react";
import styles from "./Label.module.css";

export interface ILabelProps {
  id: string;
  active: boolean;
  error: boolean;
  label: string;
}

const Label: FC<ILabelProps> = ({ id, active, error, label }) => {
  const labelClasses = classNames(styles["label"], {
    [styles["label--active"]]: active,
    [styles["error"]]: error,
  });

  return (
    <>
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
    </>
  );
};

export default Label;
