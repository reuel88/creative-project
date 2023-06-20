import { FC, ReactNode, useRef } from "react";
import { AriaModalOverlayProps, Overlay, useModalOverlay } from "react-aria";

import styles from "./Modal.module.scss";
import { OverlayTriggerState } from "react-stately";

type ModalProps = AriaModalOverlayProps & {
  children: ReactNode; 
  state: OverlayTriggerState; 
};

const Modal: FC<ModalProps> = (props) => {
  const { children, state } = props;
  const ref = useRef(null);
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  if (!state.isOpen) return null;

  return (
    <Overlay>
      <div className={styles["underlay"]} {...underlayProps}>
        <div className={styles["modal"]} {...modalProps} ref={ref}>
          {children}
        </div>
      </div>
    </Overlay>
  );
};

export default Modal;
