import { FC, ReactNode, RefObject, useRef } from "react";
import { AriaPopoverProps, Overlay, usePopover } from "react-aria";
import { OverlayTriggerState } from "react-stately";
import { VARIANT } from "../../../constants";
import styles from "./Popover.module.scss";
import classNames from "classnames";

type PopoverProps = Omit<AriaPopoverProps, "popoverRef"> & {
  children: ReactNode;
  state: OverlayTriggerState;
  popoverRef?: RefObject<HTMLDivElement>;
  variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY;
};

const Popover: FC<PopoverProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    popoverRef = ref,
    children,
    state,
    variant = VARIANT.PRIMARY,
  } = props;
  const { popoverProps } = usePopover({ ...props, popoverRef }, state);

  const PopoverClasses = classNames(styles["popover"], styles[variant]);

  return (
    <Overlay>
      <div className={PopoverClasses} {...popoverProps} ref={popoverRef}>
        {children}
      </div>
    </Overlay>
  );
};

export default Popover;
