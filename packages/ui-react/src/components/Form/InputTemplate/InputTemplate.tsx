import classNames from "classnames";
import {
  ChangeEvent,
  ComponentType,
  forwardRef,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { VARIANT } from "../../../constants";
import Input, { IInputProps } from "../Input";
import Label, { ILabelProps } from "../Label";
import styles from "./InputTemplate.module.css";

interface InputTemplateProps extends IInputProps, ILabelProps {
  leftComponent?: ComponentType<{ className: string; error: boolean }>;
  rightComponent?: ComponentType<{ className: string; error: boolean }>;
  variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY;
  placeholder?: string;
}

type InputTemplateWithoutProps = Omit<
  InputTemplateProps,
  "active" | "error" | "value" | "onBlur" | "onChange" | "onFocus"
>;

export interface IInputTemplateProps extends InputTemplateWithoutProps {
  error?: string;
  onBlur?: (e: SyntheticEvent) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: SyntheticEvent) => void;
}

const InputTemplate = forwardRef<HTMLInputElement, IInputTemplateProps>(
  (
    {
      id,
      error = "",
      label,
      leftComponent: LeftComponent,
      rightComponent: RightComponent,
      placeholder,
      variant = VARIANT.PRIMARY,
      onBlur,
      onChange,
      onFocus,
      ...rest
    },
    ref
  ) => {
    const { t } = useTranslation();
    const [hasError, setHasError] = useState(false);
    const [value, setValue] = useState("");
    const [flagActive, setFlagActive] = useState(false);
    const [labelActive, setLabelActive] = useState(false);

    useEffect(() => {
      !flagActive && setLabelActive(value.trim().length > 0);
    }, [flagActive, labelActive, value]);

    useEffect(() => {
      setHasError((error ?? "").trim().length > 0);
    }, [error]);

    const containerTopClasses = classNames(
      styles["input-template__container-top"],
      styles[variant],
      {
        [styles["error"]]: hasError,
      }
    );

    const containerTopMiddleClasses = classNames(
      styles["input-template__container-top--middle"],
      styles[variant],
      {
        [styles["error"]]: hasError,
      }
    );

    const handleBlur = (e: SyntheticEvent) => {
      setFlagActive(false);
      if (typeof onBlur === "function") onBlur(e);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (typeof onChange === "function") onChange(e);
    };

    const handleFocus = (e: SyntheticEvent) => {
      setFlagActive(true);
      setLabelActive(true);
      if (typeof onFocus === "function") onFocus(e);
    };

    return (
      <div className={styles["input-template__wrapper"]}>
        <div className={containerTopClasses}>
          {LeftComponent && (
            <LeftComponent
              className={styles["input-template__container-top--left"]}
              error={hasError}
            />
          )}
          <div className={containerTopMiddleClasses}>
            <Label
              id={id}
              active={labelActive}
              error={hasError}
              label={placeholder || label}
            />
            <Input
              id={id}
              ref={ref}
              value={value}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              aria-invalid={hasError}
              {...(hasError ? { [`aria-describedby`]: `${id}_error` } : {})}
              {...rest}
            />
          </div>
          {RightComponent && (
            <RightComponent
              className={styles["input-template__container-top--right"]}
              error={hasError}
            />
          )}
        </div>
        {hasError && (
          <div className={styles["input-template__error"]} id={`${id}_error`}>
            {t(error)}
          </div>
        )}
      </div>
    );
  }
);

export default InputTemplate;
