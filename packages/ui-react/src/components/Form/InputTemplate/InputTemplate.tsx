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
import styles from "./InputTemplate.module.scss";

export interface IComponentTypeProps {
  className?: string;
  error?: boolean;
}

interface InputTemplateProps extends IInputProps, ILabelProps {
  leftComponent?: ComponentType<IComponentTypeProps>;
  rightComponent?: ComponentType<IComponentTypeProps>;
  variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY;
  placeholder?: string;
}

type InputTemplateWithoutProps = Omit<
  InputTemplateProps,
  "active" | "error" | "onBlur" | "onChange" | "onFocus"
>;

export interface IInputTemplateProps extends InputTemplateWithoutProps {
  containerTopClasses?: string;
  error?: string | null;
  onBlur?: (e: SyntheticEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: SyntheticEvent) => void;
}

const InputTemplate = forwardRef<HTMLInputElement, IInputTemplateProps>(
  (
    {
      id,
      containerTopClasses: defaultContainerTopClasses = "",
      error = "",
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
    },
    ref
  ) => {
    const { t } = useTranslation();
    const [hasError, setHasError] = useState(false);
    const [flagActive, setFlagActive] = useState(false);
    const [labelActive, setLabelActive] = useState(false);

    useEffect(() => {
      !flagActive && setLabelActive(value.trim().length > 0);
    }, [flagActive, labelActive, value]);

    useEffect(() => {
      setHasError((error ?? "").trim().length > 0);
    }, [error]);

    const containerTopClasses = classNames(
      defaultContainerTopClasses,
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

    const containerTopLeftClasses = classNames(
      styles["input-template__container-top--left"],
      {
        [styles["error"]]: hasError,
      }
    );

    const containerTopRightClasses = classNames(
      styles["input-template__container-top--right"],
      {
        [styles["error"]]: hasError,
      }
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
      <div className={styles["input-template__wrapper"]}>
        <div className={containerTopClasses}>
          {LeftComponent && (
            <LeftComponent
              className={containerTopLeftClasses}
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
              onChange={onChange}
              onFocus={handleFocus}
              aria-invalid={hasError}
              {...(hasError ? { [`aria-describedby`]: `${id}_error` } : {})}
              {...rest}
            />
          </div>
          {RightComponent && (
            <RightComponent
              className={containerTopRightClasses}
              error={hasError}
            />
          )}
        </div>
        {hasError && typeof error === "string" && (
          <div
            className={styles["input-template__error-message"]}
            id={`${id}_error`}
          >
            {t(error)}
          </div>
        )}
      </div>
    );
  }
);

export default InputTemplate;
