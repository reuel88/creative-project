import classNames from "classnames";
import { FC } from "react";
import { Card } from "../Card";
import { useListing, withListing } from "./_ListingContext";
import ViewControl from "./ViewControl";
import styles from "./Listing.module.css";

const Listing: FC = () => {
  const { title, view } = useListing();

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
