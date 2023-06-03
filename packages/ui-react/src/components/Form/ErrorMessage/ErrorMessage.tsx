import { useHasError } from "../../../hooks/useHasError";
import { DOMAttributes, FC, ReactNode } from "react";

import styles from "./ErrorMessage.module.scss";

export type ErrorMessageProps = DOMAttributes<unknown> & {
  errorMessage?: ReactNode;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ errorMessage, ...rest }) => {
  const [hasError] = useHasError(errorMessage);

  if (!hasError) return null;

  return (
    <>
      <div className={styles["error-message"]} {...rest}>
        {errorMessage}
      </div>
    </>
  );
};

export default ErrorMessage;
