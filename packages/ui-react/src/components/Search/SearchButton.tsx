import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ComponentType, MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";
import styles from "./SearchButton.module.css";

interface SearchButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const SearchButton: ComponentType<SearchButtonProps> = ({
  onClick,
  ...rest
}) => {
  const { t } = useTranslation();
  return (
    <button className={styles["search-button"]} onClick={onClick} {...rest}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <span className={styles["search-button__text"]}>{t("Search")}</span>
    </button>
  );
};

export default SearchButton;
