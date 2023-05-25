import { FC, RefObject, useRef } from "react";
import { AriaListBoxOptions, useListBox } from "react-aria";
import { ListState } from "react-stately";
import Option from "./Option";

export type ListBoxProps = AriaListBoxOptions<unknown> & {
  listBoxRef?: RefObject<HTMLUListElement>;
  state: ListState<unknown>;
};

const ListBox: FC<ListBoxProps> = (props) => {
  const ref = useRef<HTMLUListElement>(null);
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul {...listBoxProps} ref={listBoxRef}>
      {[...state.collection].map((item) => {
        return <Option key={item.key} item={item} state={state} />;
      })}
    </ul>
  );
};

export default ListBox;
