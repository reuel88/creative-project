import classNames from "classnames";
import { ComponentType, FC, useEffect, useRef, useState } from "react";
import { AriaTextFieldProps, useTextField } from "react-aria";
import { VARIANT } from "../../../../constants";
import { useIsActive } from "../../../../hooks/useIsActive";
import Input from "../../Input";
import Label from "../../Label";
import styles from "../InputTemplate.module.css";

export type SideComponentProps = {
  className?: string;
  hasError?: boolean;
};

export type InputTemplateProps = AriaTextFieldProps & {
  containerTopClasses?: string;
  description?: string;
  errorMessage?: string;
  label: string;
  leftComponent?: ComponentType<SideComponentProps>;
  rightComponent?: ComponentType<SideComponentProps>;
  variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY;
};

const InputTemplate: FC<InputTemplateProps> = (props) => {
  const {
    containerTopClasses: defaultContainerTopClasses = "",
    description,
    errorMessage,
    label,
    leftComponent: LeftComponent,
    rightComponent: RightComponent,
    variant = VARIANT.PRIMARY,
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isActive, activeProps] = useIsActive(props);
  const { descriptionProps, errorMessageProps, inputProps, labelProps } =
    useTextField(
      {
        ...activeProps,
        validationState: hasError ? "invalid" : "valid",
      },
      ref
    );

  useEffect(() => {
    setHasError((errorMessage || "").trim().length > 0);
  }, [errorMessage]);

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
  return (
    <>
      <div className={styles["input-template__wrapper"]}>
        <div className={containerTopClasses}>
          {LeftComponent && (
            <LeftComponent
              className={containerTopLeftClasses}
              hasError={hasError}
            />
          )}
          <div className={containerTopMiddleClasses}>
            <Label.V2 {...labelProps} isActive={isActive} hasError={hasError}>
              {label}
            </Label.V2>
            <Input.V2 {...inputProps} ref={ref} />
          </div>
          {RightComponent && (
            <RightComponent
              className={containerTopRightClasses}
              hasError={hasError}
            />
          )}
        </div>
        <div {...descriptionProps}>{description}</div>
        {hasError && (
          <div
            className={styles["input-template__error"]}
            {...errorMessageProps}
          >
            {errorMessage}
          </div>
        )}
      </div>
    </>
  );
};

export default InputTemplate;
