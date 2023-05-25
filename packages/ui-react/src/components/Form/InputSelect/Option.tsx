import { FC, useRef } from "react";
import { ListState, Node } from "react-stately";
import { useOption } from "react-aria";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

type OptionProps = {
  item: Node<unknown>;
  state: ListState<unknown>;
};

const Option: FC<OptionProps> = ({ item, state }) => {
  const ref = useRef<HTMLLIElement>(null);
  const { isSelected, optionProps } = useOption(
    {
      key: item.key,
    },
    state,
    ref
  );

  return (
    <li {...optionProps} ref={ref}>
      {isSelected && <FontAwesomeIcon icon={faCheck} />}
      {item.rendered}
    </li>
  );
};

export default Option;
