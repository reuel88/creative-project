import classNames from "classnames";
import { ComponentType, FC, SyntheticEvent, useEffect, useState } from "react";
import { VARIANT } from "../../../constants";
import Input, { IInputProps } from "../Input";
import Label, { ILabelProps } from "../Label";
import styles from "./InputTemplate.module.css";

interface IInputTemplate extends IInputProps, ILabelProps {
  leftComponent?: ComponentType<{ className: string }>;
  rightComponent?: ComponentType<{ className: string }>;
  variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY;
  placeholder?: string;
}

type InputTemplateWithOut = Omit<
  IInputTemplate,
  "active" | "onBlur" | "onFocus"
>;

export interface IInputTemplateProps extends InputTemplateWithOut {
  onBlur?: (e: SyntheticEvent) => void;
  onFocus?: (e: SyntheticEvent) => void;
}

const InputTemplate: FC<IInputTemplateProps> = ({
  id,
  label,
  leftComponent: LeftComponent,
  rightComponent: RightComponent,
  placeholder,
  value,
  variant = VARIANT.PRIMARY,
  onBlur,
  onChange,
  onFocus,
  ...rest
}) => {
  const [flagActive, setFlagActive] = useState(false);
  const [labelActive, setLabelActive] = useState(false);

  useEffect(() => {
    !flagActive && setLabelActive(value.trim().length > 0);
  }, [flagActive, labelActive, value]);

  const wrapperClasses = classNames(
    styles["input-template__wrapper"],
    styles[variant]
  );

  const handleBlur = (e: SyntheticEvent) => {
    setFlagActive(false);
    if (typeof onBlur === "function") onBlur(e);
  };

  const handleFocus = (e: SyntheticEvent) => {
    setFlagActive(true);
    setLabelActive(true);
    if (typeof onFocus === "function") onFocus(e);
  };

  return (
    <div className={wrapperClasses}>
      {LeftComponent && (
        <LeftComponent className={styles["input-template__wrapper--left"]} />
      )}
      <div className={styles["input-template__wrapper--middle"]}>
        <Label id={id} active={labelActive} label={placeholder || label} />
        <Input
          id={id}
          value={value}
          onBlur={handleBlur}
          onChange={onChange}
          onFocus={handleFocus}
          {...rest}
        />
      </div>
      {RightComponent && (
        <RightComponent className={styles["input-template__wrapper--right"]} />
      )}
    </div>
  );
};

export default InputTemplate;
