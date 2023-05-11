import { FC, useRef } from "react";
import profile from "../../assets/profile.jpg";
import { useContainerDimensions } from "../../hooks/useContainerDimensions";
import styles from "./CardCarousel.module.css";

const CardCarousel: FC = () => {
  const carouselRef = useRef<null | HTMLDivElement>(null);
  const { width } = useContainerDimensions(carouselRef);

  return (
    <div
      className={styles["card-carousel__wrapper"]}
      ref={carouselRef}
      tabIndex={0}
    >
      <div className={styles["card-carousel__content"]}>
        <div className={styles["card-carousel__item"]} style={{ width }}>
          <img
            className={styles["card-carousel__img"]}
            src={profile}
            alt="Me"
          />
        </div>
        <div className={styles["card-carousel__item"]} style={{ width }}>
          <img
            className={styles["card-carousel__img"]}
            src={profile}
            alt="Me"
          />
        </div>
        <div className={styles["card-carousel__item"]} style={{ width }}>
          <img
            className={styles["card-carousel__img"]}
            src={profile}
            alt="Me"
          />
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
