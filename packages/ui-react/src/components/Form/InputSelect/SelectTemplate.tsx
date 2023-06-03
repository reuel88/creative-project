import classNames from "classnames";
import { FC, useRef, JSX } from "react";
import {
  AriaSelectProps,
  HiddenSelect,
  mergeProps,
  useButton,
  useFocusRing,
  useSelect,
} from "react-aria";
import { useSelectState } from "react-stately";
import { VARIANT } from "../../../constants";
import { useContainerClasses } from "../../../hooks/useContainerClasses";
import { useHasError } from "../../../hooks/useHasError";
import { useIsActive } from "../../../hooks/useIsActive";
import Description from "../Description";
import ErrorMessage from "../ErrorMessage";
import Label from "../Label";
import ListBox from "./ListBox";
import Popover from "./Popover";
import styles from "./SelectTemplate.module.scss";

export { Item } from "react-stately"; // export Item from react-stately

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectTemplateProps = AriaSelectProps<SelectOption> & {
  description?: string;
  errorMessage?: string;
  label: string;
  name: string;
  placeholder?: string;
  variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY;
};

const SelectTemplate: FC<SelectTemplateProps> = (props) => {
  const {
    description,
    errorMessage,
    label,
    name,
    placeholder,
    variant = VARIANT.PRIMARY,
  } = props;
  const state = useSelectState(props);
  const ref = useRef(null);
  const [hasError] = useHasError(errorMessage);
  const [isActive] = useIsActive(props);
  const { containerClasses, containerTopClasses } = useContainerClasses({
    errorMessage,
    variant,
  });
  const {
    descriptionProps,
    errorMessageProps,
    labelProps,
    menuProps,
    triggerProps,
    valueProps,
  } = useSelect(props, state, ref);
  const { buttonProps } = useButton(triggerProps, ref);
  const { focusProps } = useFocusRing();

  const selectContainerTopMiddleClasses = classNames(
    styles["select-container--top--middle"],
    styles[variant],
    {
      [styles["error"]]: hasError,
    }
  );

  const selectContainerButtonClasses = classNames(
    styles["select-container__button"],
    styles[variant],
    {
      [styles["error"]]: hasError,
    }
  );

  return (
    <>
      <div className={containerClasses}>
        <div className={containerTopClasses}>
          {/* Left Component*/}
          <div className={selectContainerTopMiddleClasses}>
            <Label.V2
              as={"div" as unknown as JSX.IntrinsicElements}
              hasError={hasError}
              isActive={isActive}
              {...labelProps}
            >
              {label}
            </Label.V2>
            <HiddenSelect
              state={state}
              triggerRef={ref}
              label={label}
              name={name}
            />
            <button
              className={selectContainerButtonClasses}
              {...mergeProps(buttonProps, focusProps)}
              type="button"
              ref={ref}
            >
              <div {...valueProps}>
                {state.selectedItem ? state.selectedItem.rendered : placeholder}
              </div>
            </button>
          </div>
          {/* Right Component*/}

          {state.isOpen && (
            <Popover
              state={state}
              triggerRef={ref}
              placement="bottom start"
              variant={variant}
            >
              <ListBox state={state} variant={variant} {...menuProps} />
            </Popover>
          )}
        </div>

        <Description
          description={description}
          variant={variant}
          {...descriptionProps}
        />

        <ErrorMessage errorMessage={errorMessage} {...errorMessageProps} />
      </div>
    </>
  );
};

export default SelectTemplate;
