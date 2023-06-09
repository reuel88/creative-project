import classNames from "classnames";
import {
  AriaAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
} from "react";
import { VARIANT } from "../../constants";
import styles from "./Button.module.css";

interface ButtonProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    AriaAttributes {
  className?: string;
  variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = VARIANT.PRIMARY,
  ...rest
}) => {
  const buttonClasses = classNames(styles.button, styles[variant], className);

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
