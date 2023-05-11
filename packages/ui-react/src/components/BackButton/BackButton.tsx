import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./BackButton.module.css";

const BackButton: FC<{ href: string }> = ({ href }) => {
  const { t } = useTranslation();
  return (
    <>
      <a className={styles["back-button"]} href={href}>
        <FontAwesomeIcon
          className={styles["back-button--left-icon"]}
          icon={faChevronLeft}
        />
        <FontAwesomeIcon
          className={styles["back-button--right-icon"]}
          icon={faChevronRight}
        />
        <span className={styles["back-button__text"]}>{t("Back")}</span>
      </a>
    </>
  );
};

export default BackButton;
