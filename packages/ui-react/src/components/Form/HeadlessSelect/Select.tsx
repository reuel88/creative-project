import { cloneElement, FC, PropsWithChildren, useMemo } from "react";
import classNames from "classnames";
import { useActionContext } from "./_ActionContext";
import recursiveMap from "../../../utils/recursiveMap";
import { useSelectContext } from "./_SelectContext";

export interface SelectProps extends PropsWithChildren {
  className?: (() => string) | string;
  disabled?: boolean;
}

const Select: FC<SelectProps> = ({ children, className, ...rest }) => {
  const { selectRef } = useActionContext();
  const { options } = useSelectContext();
  let count = 0;

  const selectClasses: string = useMemo(() => {
    return typeof className === "function"
      ? className()
      : classNames(className);
  }, [className]);

  return (
    <div ref={selectRef} className={selectClasses} {...rest}>
      {recursiveMap(children, (child) => {
        if (typeof child === "string") return child;

        if (child.type.displayName === "Option") {
          options.current[count] = child.props;
          return cloneElement(child, { index: count++ });
        }
        return child;
      })}
    </div>
  );
};

export default Select;
