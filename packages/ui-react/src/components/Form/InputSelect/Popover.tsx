import { FC, ReactNode, RefObject, useRef } from "react";
import { AriaPopoverProps, Overlay, usePopover } from "react-aria";
import { OverlayTriggerState } from "react-stately";

type PopoverProps = Omit<AriaPopoverProps, "popoverRef"> & {
  children: ReactNode;
  state: OverlayTriggerState;
  popoverRef?: RefObject<HTMLDivElement>;
};

const Popover: FC<PopoverProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { popoverRef = ref, state, children } = props;
  const { popoverProps } = usePopover({ ...props, popoverRef }, state);

  return (
    <Overlay>
      <div {...popoverProps} ref={popoverRef}>
        {children}
      </div>
    </Overlay>
  );
};

export default Popover;
