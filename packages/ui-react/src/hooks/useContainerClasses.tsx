import classNames from "classnames";
import { useHasError } from "./useHasError";
import { ReactNode } from "react";
import styles from "./useTemplateClasses.module.scss";
import { VARIANT } from "../constants";

type TemplateClasses = {
  errorMessage?: ReactNode;
  variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY;
};

export const useContainerClasses = ({
  errorMessage,
  variant = VARIANT.PRIMARY,
}: TemplateClasses) => {
  const [hasError] = useHasError(errorMessage);

  const containerClasses = classNames(styles["container"]);

  const containerTopClasses = classNames(
    styles["container--top"],
    styles[variant],
    {
      [styles["error"]]: hasError,
    }
  );

  const containerTopLeftClasses = classNames(
    styles["container--top--left"],
    styles[variant],
    {
      [styles["error"]]: hasError,
    }
  );

  const containerTopMiddleClasses = classNames(
    styles["container--top--middle"],
    styles[variant],
    {
      [styles["error"]]: hasError,
    }
  );

  const containerTopRightClasses = classNames(
    styles["container--top--right"],
    styles[variant],
    {
      [styles["error"]]: hasError,
    }
  );

  return {
    containerClasses,
    containerTopClasses,
    containerTopLeftClasses,
    containerTopMiddleClasses,
    containerTopRightClasses,
  };
};
