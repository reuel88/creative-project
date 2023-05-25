import { FC, useRef } from "react";
import {
  AriaSelectProps,
  HiddenSelect,
  useButton,
  useSelect,
} from "react-aria";
import { useTranslation } from "react-i18next";
import { useSelectState } from "react-stately";
import Label from "../Label";
import Popover from "./Popover";
import ListBox from "./ListBox";
import styles from "../InputTemplate/InputTemplate.module.scss";
import { SelectOption } from "./InputSelect";

export { Item } from "react-stately"; // export Item from react-stately

export type SelectProps = AriaSelectProps<SelectOption> & {
  description?: string;
  errorMessage?: string;
  label: string;
  name: string;
  placeholder?: string;
};

const Select: FC<SelectProps> = (props) => {
  const { label, name, placeholder } = props;
  const { t } = useTranslation();
  const state = useSelectState(props);
  const ref = useRef(null);
  const { labelProps, menuProps, triggerProps, valueProps } = useSelect(
    props,
    state,
    ref
  );
  const { buttonProps } = useButton(triggerProps, ref);

  const placeholderText = placeholder ? placeholder : t("Select an option");

  return (
    <>
      <div className={styles["input-template__wrapper"]}>
        <div>
          {/* Left Component*/}
          <div>
            <Label.V2 {...labelProps} hasError={false} isActive={false}>
              {label}
            </Label.V2>
            <HiddenSelect
              state={state}
              triggerRef={ref}
              label={label}
              name={name}
            />
            <button {...buttonProps} type="button" ref={ref}>
              <div {...valueProps}>
                {state.selectedItem
                  ? state.selectedItem.rendered
                  : placeholderText}
              </div>
            </button>
          </div>
          {/* Right Component*/}
        </div>

        {state.isOpen && (
          <Popover state={state} triggerRef={ref} placement="bottom start">
            <ListBox state={state} {...menuProps} />
          </Popover>
        )}

        {/* description */}

        {/* errorMessage */}
      </div>
    </>
  );
};

export default Select;
