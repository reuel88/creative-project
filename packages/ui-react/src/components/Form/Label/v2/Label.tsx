import classNames from "classnames";
import { ElementType, FC, HTMLAttributes, JSX } from "react";
import styles from "../Label.module.css";
import { TextFieldAria } from "react-aria";

export type LabelProps = TextFieldAria["labelProps"] & {
  as?: JSX.IntrinsicElements;
  hasError: boolean;
  isActive: boolean;
};

interface HTMLTagProps extends HTMLAttributes<HTMLOrSVGElement> {
  as: ElementType;
}

const HTMLTag: FC<HTMLTagProps> = ({ as: As, ...rest }) => {
  return <As {...rest} />;
};

const Label: FC<LabelProps> = ({
  as: component = "label",
  hasError,
  isActive,
  ...rest
}) => {
  const labelClasses = classNames(styles["label"], {
    [styles["label--active"]]: isActive,
    [styles["error"]]: hasError,
  });

  return (
    <>
      <HTMLTag
        as={component as unknown as ElementType}
        className={labelClasses}
        {...rest}
      />
    </>
  );
};

export default Label;
