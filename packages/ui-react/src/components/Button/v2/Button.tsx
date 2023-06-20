import classNames from "classnames";
import { ElementType, FC, useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";
import { VARIANT } from "../../../constants";
import styles from "../Button.module.css";

type ButtonProps = AriaButtonProps<ElementType> & {
  className?: string;
  variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY;
};

const Button: FC<ButtonProps> = (props) => {
  const { children, className, variant = VARIANT.PRIMARY } = props;
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  const buttonClasses = classNames(styles.button, styles[variant], className);

  return (
    <button className={buttonClasses} ref={ref} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
