import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { ComponentType, FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import InputTemplate from "./InputTemplate";
import { IInputProps } from "./_InputContext";
import styles from "./InputPassword.module.css";

type THandleClick = () => void;

const LeftComponent = (showPassword: boolean) => {
  const Component: ComponentType = (props) => {
    return (
      <div {...props}>
        {showPassword ? (
          <FontAwesomeIcon icon={faLockOpen} />
        ) : (
          <FontAwesomeIcon icon={faLock} />
        )}
      </div>
    );
  };

  return Component;
};

const RightComponent = (showPassword: boolean, handleClick: THandleClick) => {
  const Component: ComponentType = () => {
    const { t } = useTranslation();

    return (
      <Button className={styles["button"]} type="button" onClick={handleClick}>
        {showPassword ? (
          <>
            <FontAwesomeIcon icon={faEye} />
            <span className={styles["button__text"]}>{t("Hide")}</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faEyeSlash} />
            <span className={styles["button__text"]}>{t("Unhide")}</span>
          </>
        )}
      </Button>
    );
  };

  return Component;
};

const InputPassword: FC<IInputProps> = ({ ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword((state) => !state);
  };

  return (
    <>
      <InputTemplate
        leftComponent={LeftComponent(showPassword)}
        rightComponent={RightComponent(showPassword, handleClick)}
        type={showPassword ? "text" : "password"}
        {...rest}
      />
    </>
  );
};

export default InputPassword;
