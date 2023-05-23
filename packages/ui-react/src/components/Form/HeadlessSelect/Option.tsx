import { FC, PropsWithChildren, SyntheticEvent, useMemo } from "react";
import { useSelectContext } from "./_SelectContext";
import classNames from "classnames";
import { useActionContext } from "./_ActionContext";

export type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectOption = Option | string;

interface OptionProps extends PropsWithChildren {
  className?: ((args: unknown) => string) | string;
  disabled?: boolean;
  value: SelectOption;
  onClick?: (option: SelectOption) => void;
  onMouseEnter?: (e: SyntheticEvent<HTMLElement>) => void;
}

const Option: FC<OptionProps & { index: number }> = ({
  children,
  className,
  disabled,
  index,
  value: optionValue,
  onClick,
  onMouseEnter,
  ...rest
}) => {
  const { isActiveIndex, setActiveIndex } = useActionContext();
  const { isSelected, toggleValue } = useSelectContext();

  const selected = isSelected(optionValue);

  const optionClasses: string = useMemo(() => {
    const result = {
      active: isActiveIndex(index),
      disabled: !!disabled,
      selected: selected,
    };

    return typeof className === "function"
      ? className(result)
      : classNames(className, result);
  }, [className, disabled, index, selected, isActiveIndex, isSelected]);

  const handleClick = () => {
    if (disabled) return;
    toggleValue(optionValue);
    if (typeof onClick === "function") onClick(optionValue);
  };

  const handleMouseEnter = (e: SyntheticEvent<HTMLElement>) => {
    setActiveIndex(index);
    if (typeof onMouseEnter === "function") onMouseEnter(e);
  };

  return (
    <li
      className={optionClasses}
      role="option"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      tabIndex={disabled === true ? undefined : -1}
      aria-disabled={disabled === true ? true : undefined}
      aria-selected={selected}
      {...rest}
    >
      {children}
    </li>
  );
};

export default Option as FC<OptionProps>;
