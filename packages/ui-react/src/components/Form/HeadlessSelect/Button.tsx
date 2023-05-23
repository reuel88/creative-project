import { FC, PropsWithChildren, SyntheticEvent, useMemo } from "react";
import { useActionContext } from "./_ActionContext";
import classNames from "classnames";

interface ButtonProps extends PropsWithChildren {
  className?: (() => string) | string;
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ children, className, onClick, ...rest }) => {
  const { buttonRef, open, toggleOpen } = useActionContext();

  const buttonClasses: string = useMemo(() => {
    return typeof className === "function"
      ? className()
      : classNames(className);
  }, [className]);

  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    toggleOpen();
    if (typeof onClick === "function") onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      className={buttonClasses}
      id={`_button`}
      type={"button"}
      onClick={handleClick}
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-controls={`_options`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
