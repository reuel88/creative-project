import {
  faEye,
  faEyeSlash,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import InputTemplate from "../../InputTemplate";
import { InputTemplateProps, SideComponentProps } from "../../InputTemplate/v2";
import { useTranslation } from "react-i18next";
import Button from "../../../Button";
import styles from "../InputPassword.module.css";

const LeftComponent = (showPassword: boolean) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const Component: FC<SideComponentProps> = ({ hasError, ...rest }) => {
    const icon = showPassword ? faLockOpen : faLock;

    return (
      <div {...rest}>
        <FontAwesomeIcon icon={icon} />
      </div>
    );
  };

  return Component;
};

const RightComponent = (showPassword: boolean, handlePress: () => void) => {
  const Component: FC<SideComponentProps> = () => {
    const { t } = useTranslation();
    const icon = showPassword ? faEye : faEyeSlash;
    const hide = showPassword ? "Hide" : "Unhide";

    return (
      <Button.V2
        className={styles["button"]}
        type="button"
        onPress={handlePress}
      >
        <FontAwesomeIcon icon={icon} />
        <span className={styles["button__text"]}>{t(hide)}</span>
      </Button.V2>
    );
  };

  return Component;
};

const InputPassword: FC<InputTemplateProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePress = () => {
    setShowPassword((state) => !state);
  };

  return (
    <>
      <InputTemplate.V2
        containerTopClasses={styles["input_password__container"]}
        type={showPassword ? "text" : "password"}
        leftComponent={LeftComponent(showPassword)}
        rightComponent={RightComponent(showPassword, handlePress)}
        {...props}
      />
    </>
  );
};

export default InputPassword;
