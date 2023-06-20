import { ElementType, FC, useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";

type ButtonProps = AriaButtonProps<ElementType> & {
  className?: string;
};

const Button: FC<ButtonProps> = (props) => {
  const { children, className } = props;
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <button ref={ref} className={className} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
