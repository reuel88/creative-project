/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { ComponentType, forwardRef, useState } from "react";
import { useTranslation } from "react-i18next";
import InputTemplate, {
  IComponentTypeProps,
  IInputTemplateProps,
} from "../InputTemplate";
import Button from "../../Button";
import styles from "./InputPassword.module.css";

export type TInputPasswordProps = Omit<IInputTemplateProps, "type">;

const LeftComponent = (showPassword: boolean) => {
  const Component: ComponentType<IComponentTypeProps> = ({
    error,
    ...rest
  }) => {
    const icon = showPassword ? faLockOpen : faLock;

    return (
      <div {...rest}>
        <FontAwesomeIcon icon={icon} />
      </div>
    );
  };

  return Component;
};

const RightComponent = (showPassword: boolean, handleClick: () => void) => {
  const Component: ComponentType = () => {
    const { t } = useTranslation();
    const icon = showPassword ? faEye : faEyeSlash;
    const hide = showPassword ? "Hide" : "Unhide";

    return (
      <Button className={styles["button"]} type="button" onClick={handleClick}>
        <FontAwesomeIcon icon={icon} />
        <span className={styles["button__text"]}>{t(hide)}</span>
      </Button>
    );
  };

  return Component;
};

const InputPassword = forwardRef<HTMLInputElement, TInputPasswordProps>(
  ({ ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
      setShowPassword((state) => !state);
    };

    return (
      <>
        <InputTemplate
          containerTopClasses={styles["input_password__container"]}
          leftComponent={LeftComponent(showPassword)}
          rightComponent={RightComponent(showPassword, handleClick)}
          type={showPassword ? "text" : "password"}
          ref={ref}
          {...rest}
        />
      </>
    );
  }
);

export default InputPassword;
