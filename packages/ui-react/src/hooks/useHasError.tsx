import _isEmpty from "lodash/isEmpty";
import { ReactNode, useEffect, useState } from "react";

export const useHasError = (errorMessage?: ReactNode) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (typeof errorMessage === "string") {
      setHasError(errorMessage.trim().length > 0);
    } else {
      setHasError(
        typeof errorMessage !== "undefined" && !_isEmpty(errorMessage)
      );
    }
  }, [errorMessage]);

  return [hasError];
};
