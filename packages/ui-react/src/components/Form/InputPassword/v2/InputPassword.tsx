/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  faEye,
  faEyeSlash,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useMemo, useState } from "react";
import InputTemplate from "../../InputTemplate";
import { InputTemplateProps, SideComponentProps } from "../../InputTemplate/v2";
import { useTranslation } from "react-i18next";
import Button from "../../../Button";
import styles from "../InputPassword.module.scss";
import classNames from "classnames";

const InputPassword: FC<InputTemplateProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePress = () => {
    setShowPassword((state) => !state);
  };

  const MemoLeftComponent = useMemo(() => {
    const Component: FC<SideComponentProps> = ({ hasError, ...rest }) => {
      const icon = showPassword ? faLockOpen : faLock;

      return (
        <div {...rest}>
          <FontAwesomeIcon icon={icon} />
        </div>
      );
    };

    return Component;
  }, [showPassword]);

  const MemoRightComponent = useMemo(() => {
    const Component: FC<SideComponentProps> = ({ hasError }) => {
      const { t } = useTranslation();
      const icon = showPassword ? faEye : faEyeSlash;
      const hide = showPassword ? "Hide" : "Unhide";

      const buttonClasses = classNames(styles["button"], {
        [styles["error"]]: hasError,
      });

      return (
        <Button.V2
          className={buttonClasses}
          type="button"
          onPress={handlePress}
        >
          <FontAwesomeIcon icon={icon} />
          <span className={styles["button__text"]}>{t(hide)}</span>
        </Button.V2>
      );
    };

    return Component;
  }, [showPassword]);

  return (
    <>
      <InputTemplate.V2
        containerTopClasses={styles["input_password__container"]}
        type={showPassword ? "text" : "password"}
        leftComponent={MemoLeftComponent}
        rightComponent={MemoRightComponent}
        {...props}
      />
    </>
  );
};

export default InputPassword;
