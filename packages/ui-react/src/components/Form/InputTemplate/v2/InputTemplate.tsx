import classNames from "classnames";
import { ComponentType, FC, useRef } from "react";
import { AriaTextFieldProps, useTextField } from "react-aria";
import { VARIANT } from "../../../../constants";
import { useIsActive } from "../../../../hooks/useIsActive";
import { useHasError } from "../../../../hooks/useHasError";
import Input from "../../Input";
import Label from "../../Label";
import styles from "../InputTemplate.module.scss";
import ErrorMessage from "../../ErrorMessage";
import Description from "../../Description";
import { useContainerClasses } from "../../../../hooks/useContainerClasses";

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
  const [hasError] = useHasError(errorMessage);
  const [isActive, activeProps] = useIsActive(props);
  const {
    containerTopClasses,
    containerTopLeftClasses,
    containerTopMiddleClasses,
    containerTopRightClasses,
  } = useContainerClasses({
    errorMessage,
    variant,
  });
  const { descriptionProps, errorMessageProps, inputProps, labelProps } =
    useTextField(
      {
        ...activeProps,
        validationState: hasError ? "invalid" : "valid",
      },
      ref
    );

  const templateContainerTopClasses = classNames(
    defaultContainerTopClasses,
    containerTopClasses
  );

  return (
    <>
      <div className={styles["input-template__wrapper"]}>
        <div className={templateContainerTopClasses}>
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

export default InputTemplate;
