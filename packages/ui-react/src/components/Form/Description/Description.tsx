import classNames from "classnames";
import { DOMAttributes, FC } from "react";
import { VARIANT } from "../../../constants";
import styles from "./Description.module.scss";

export type DescriptionProps = DOMAttributes<unknown> & {
  description?: string;
  variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY;
};

const Description: FC<DescriptionProps> = ({
  description,
  variant = VARIANT.PRIMARY,
  ...rest
}) => {
  if (!description) return null;

  const descriptionClasses = classNames(styles["description"], styles[variant]);

  return (
    <>
      <div className={descriptionClasses} {...rest}>
        {description}
      </div>
    </>
  );
};

export default Description;
