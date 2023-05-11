import styles from "./Card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLocationDot } from "@fortawesome/free-solid-svg-icons";
import CardCarousel from "./CardCarousel";

const Card = () => {
    return <article className={styles["card-wrapper"]}>
        <div className={styles["card-first"]}>
            <CardCarousel/>
        </div>
        <div className={styles["card-end"]}>
            <div className={styles["card-detail__wrapper"]}>
                <div className={styles["card-detail__start"]}>
                    <h3 className={styles["card-detail__name"]}>Reuel Olayres Teodoro</h3>
                    <p className={styles["card-detail__price"]}>From $100/hr</p>
                </div>
                <div className={styles["card-detail__end"]}>
                    <div className={styles["card-detail__meta"]}>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <p className={styles["card-detail__location"]}>Sydney</p>
                    </div>
                    <p className={styles['card-detail__touring']} dir="ltr">21 Apr - 7 May</p>
                </div>
            </div>
        </div>
    </article>
}

export default Card;