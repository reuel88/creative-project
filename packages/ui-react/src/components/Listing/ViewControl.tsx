import classNames from "classnames";
import {
  faBinoculars,
  faGripVertical,
  faList,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { TViewProp, useListing } from "./_ListingContext";
import styles from "./ViewControl.module.css";

const ViewControl = () => {
  const { view, toggleView } = useListing();
  const { t } = useTranslation();

  const listButtonClasses = classNames(styles["view-control__button"], {
    [styles["view-control__button--active"]]: view === "list",
  });

  const gridButtonClasses = classNames(styles["view-control__button"], {
    [styles["view-control__button--active"]]: view === "grid",
  });

  const mapButtonClasses = classNames(styles["view-control__button"], {
    [styles["view-control__button--active"]]: view === "map",
  });

  const inspectButtonClasses = classNames(styles["view-control__button"], {
    [styles["view-control__button--active"]]: view === "inspect",
  });

  const handleClick = (view: TViewProp) => () => {
    toggleView(view);
  };

  return (
    <div className={styles["view-control"]}>
      <span className={styles["view-control__label"]}>{t("View")}:</span>
      <button className={listButtonClasses} onClick={handleClick("list")}>
        <FontAwesomeIcon icon={faList} />
        <span className={styles["view-control__button__text"]}>
          {t("List")}
        </span>
      </button>
      <button className={gridButtonClasses} onClick={handleClick("grid")}>
        <FontAwesomeIcon icon={faGripVertical} />
        <span className={styles["view-control__button__text"]}>
          {t("Grid")}
        </span>
      </button>
      <button className={mapButtonClasses} onClick={handleClick("map")}>
        <FontAwesomeIcon icon={faMapLocationDot} />
        <span className={styles["view-control__button__text"]}>{t("Map")}</span>
      </button>
      <button className={inspectButtonClasses} onClick={handleClick("inspect")}>
        <FontAwesomeIcon icon={faBinoculars} />
        <span className={styles["view-control__button__text"]}>
          {t("Inspect")}
        </span>
      </button>
    </div>
  );
};

export default ViewControl;
