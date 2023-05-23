import { FC, PropsWithChildren, useMemo } from "react";
import { useActionContext } from "./_ActionContext";
import classNames from "classnames";

interface OptionsProps extends PropsWithChildren {
  className?: ((args: unknown) => string) | string;
}

const Options: FC<OptionsProps> = ({ children, className, ...rest }) => {
  const { open, optionsRef } = useActionContext();

  const optionsClasses: string = useMemo(() => {
    const result = {
      open,
    };

    return typeof className === "function"
      ? className(result)
      : classNames(className, result);
  }, [className, open]);

  return (
    <ul
      ref={optionsRef}
      className={optionsClasses}
      id={`_options`}
      aria-labelledby={`_button`}
      aria-orientation="vertical"
      role="listbox"
      tabIndex={0}
      {...rest}
    >
      {children}
    </ul>
  );
};

export default Options;
