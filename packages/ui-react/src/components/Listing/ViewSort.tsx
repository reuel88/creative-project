import { faList, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { useOverlayTriggerState } from "react-stately";
import Button from "./Button";
import styles from "./ViewSort.module.scss";
import Modal from "./Modal";

const ViewSort = () => {
  const { t } = useTranslation();

  const state = useOverlayTriggerState({});

  return (
    <>
      <div className={styles["view-sort"]}>
        <div>
          <Button className={styles["view-sort__button"]} onPress={state.open}>
            {t("View")} <FontAwesomeIcon icon={faList} />
          </Button>
        </div>
        <div>
          <Button className={styles["view-sort__button"]} onPress={state.close}>
            <FontAwesomeIcon icon={faRightLeft} rotation={90} />
            {t("Sort by")}
          </Button>{" "}
        </div>
      </div>

      <Modal state={state}>
        <div className={styles["dialog"]}>
          <header className={styles["dialog__header"]}>hello</header>
          <div>
            hello
            <br />
            hello
            <br />
            hello
            <br />
            hello
            <br />
            hello
            <br />
            hello
            <br />
            hello
            <br />
            hello
            <br />
            hello
            <br />
            hello
            <br />
            hello
            <br />
            hello
            <br />
            hello
            <br />
            hello
            <br />
            hello
            <br />
            hello
            <br />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ViewSort;
