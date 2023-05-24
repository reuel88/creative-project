import { ReactNode, useEffect, useState } from "react";

export const useHasError = (errorMessage: ReactNode) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (typeof errorMessage === "string") {
      setHasError((errorMessage || "").trim().length > 0);
    } else {
      setHasError(!!errorMessage);
    }
  }, [errorMessage]);

  return [hasError];
};
