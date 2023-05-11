import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { BackButton } from "../BackButton";
import styles from "./MenuModal.module.css";

const MenuModal = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["menu-modal__wrapper"]}>
      <aside className={styles["menu-modal"]}>
        <div className={styles["menu-modal__header-wrapper"]}>
          <header className={styles["menu-modal__header"]}>
            <div className={styles["menu-modal__header-section--start"]}>
              <BackButton href={"/"} />
            </div>
            <div className={styles["menu-modal__header-section--end"]}>
              <button className={styles["close-button"]}>
                <FontAwesomeIcon icon={faXmark} />
                <span className={styles["close-button__text"]}>
                  {t("Close")}
                </span>
              </button>
            </div>
          </header>
        </div>
        <nav className={styles["menu-modal__content"]} tabIndex={0}>
          <ul className={styles["menu-modal__list"]}>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                Home
              </a>
            </li>
            <li className={styles["menu-modal__list__item"]}>
              <a href="/" className={styles["menu-modal__link"]}>
                end
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default MenuModal;
