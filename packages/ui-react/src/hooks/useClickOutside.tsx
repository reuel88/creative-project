import { RefObject } from "react";
import useEventListener from "./useEventListener";

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: (event: MouseEvent) => void
) => {
  useEventListener(
    "click",
    (e: Event) => {
      if (ref.current === null || ref.current.contains(e.target as Node))
        return;
      callback(e as MouseEvent);
    },
    window
  );
};

export default useClickOutside;
