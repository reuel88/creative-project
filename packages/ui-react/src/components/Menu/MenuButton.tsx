import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import styles from "./MenuButton.module.css";

const MenuButton = () => {
  const { t } = useTranslation();

  return (
    <>
      <button className={styles["menu-button"]}>
        <FontAwesomeIcon icon={faBars} />
        <span className={styles["menu-button__text"]}>{t("Menu")}</span>
      </button>
    </>
  );
};

export default MenuButton;
