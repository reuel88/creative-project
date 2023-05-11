import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProfileLink.module.css";

const ProfileLink: FC<{ href: string }> = ({ href }) => {
  const { t } = useTranslation();

  return (
    <a className={styles["profile-link"]} href={href}>
      <FontAwesomeIcon icon={faUser} />
      <span className={styles["profile-link__text"]}>{t("Profile")}</span>
    </a>
  );
};

export default ProfileLink;
