import { FC, RefObject, useRef } from "react";
import { AriaListBoxOptions, useListBox } from "react-aria";
import { ListState } from "react-stately";
import Option from "./Option";
import { VARIANT } from "../../../constants";

import styles from "./ListBox.module.scss";

export type ListBoxProps = AriaListBoxOptions<unknown> & {
  listBoxRef?: RefObject<HTMLUListElement>;
  state: ListState<unknown>;
  variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY;
};

const ListBox: FC<ListBoxProps> = (props) => {
  const ref = useRef<HTMLUListElement>(null);
  const { listBoxRef = ref, state, variant = VARIANT.PRIMARY } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul className={styles["listBox"]} {...listBoxProps} ref={listBoxRef}>
      {[...state.collection].map((item) => {
        return (
          <Option key={item.key} item={item} state={state} variant={variant} />
        );
      })}
    </ul>
  );
};

export default ListBox;
