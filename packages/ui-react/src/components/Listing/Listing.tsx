import classNames from "classnames";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "../Card";
import { useListingContext, withListing } from "./_ListingContext";
import ViewControl from "./ViewControl";
import styles from "./Listing.module.css";

const Listing: FC = () => {
  const { t } = useTranslation();
  const { title, view } = useListingContext();

  const listClasses = classNames(styles["list"], {
    [styles["list--grid"]]: view === "grid",
  });

  const listItemClasses = classNames(styles["list__item"], {
    [styles["list__item--grid"]]: view === "grid",
  });

  return (
    <section className={styles["listing"]}>
      <header className={styles["listing__header"]}>
        <h2 className={styles["listing__title"]}>{title}</h2>
        <ViewControl />
        <div>{t("Sort By")} :</div>
      </header>
      <div className={styles["listing__content"]}>
        <ul className={listClasses}>
          <li className={listItemClasses}>
            <Card />
          </li>
          <li className={listItemClasses}>
            <Card />
          </li>
          <li className={listItemClasses}>
            <Card />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default withListing(Listing);
