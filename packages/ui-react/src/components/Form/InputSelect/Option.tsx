import classNames from "classnames";
import { FC, useRef } from "react";
import { ListState, Node } from "react-stately";
import { useOption } from "react-aria";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { VARIANT } from "../../../constants";
import styles from "./Option.module.scss";

type OptionProps = {
  item: Node<unknown>;
  state: ListState<unknown>;
  variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY;
};

const Option: FC<OptionProps> = ({
  item,
  state,
  variant = VARIANT.PRIMARY,
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const { isDisabled, isFocused, isSelected, optionProps } = useOption(
    {
      key: item.key,
    },
    state,
    ref
  );

  const optionClasses = classNames(styles["option"], styles[variant], {
    [styles["option--focused"]]: isFocused,
    [styles["option--selected"]]: isSelected,
    [styles["option--disabled"]]: isDisabled,
  });

  return (
    <li className={optionClasses} {...optionProps} ref={ref}>
      {item.rendered}
      {isSelected && (
        <FontAwesomeIcon className={styles["option__icon"]} icon={faCheck} />
      )}
    </li>
  );
};

export default Option;
