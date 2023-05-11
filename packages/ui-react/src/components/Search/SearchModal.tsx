import classNames from "classnames";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { BackButton } from '../BackButton'
import styles from './SearchModal.module.css'

const SearchModal = () => {
    const {t} = useTranslation()

    const headerSectionStart = classNames(
        styles["search-modal__header-section"],
        styles["search-modal__header-section--start"],
    );

    const headerSectionEnd = classNames(
        styles["search-modal__header-section"],
        styles["search-modal__header-section--end"],
    )

    return <div className={styles["search-modal__wrapper"]}>
        <section className={styles["search-modal"]}>
            <div className={styles["search-modal__header-wrapper"]}>
                <header className={styles["search-modal__header"]}>
                    <div className={headerSectionStart}>
                        <BackButton />
                    </div>
                    <div className={headerSectionEnd}>
                        <form className={styles["search-form"]}>
                            <input
                                className={styles["search-form__input"]}
                                placeholder={t("Location or Postcode") || ''}
                                type="text"
                            />
                            <button
                                className={styles["search-form__button"]}
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <span className={styles["search-form__button__text"]}>
                                    {t("Search")}
                                </span>
                            </button>
                        </form>
                    </div>
                </header>
            </div>
            <div className={styles["search-modal__content"]} tabIndex={0}>
                <ul className={styles["search-modal__result-list"]}>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>hello</li>
                    <li className={styles["search-modal__result-list__item"]}>end</li>
                </ul>
            </div>
        </section>
    </div>
}

export default SearchModal;