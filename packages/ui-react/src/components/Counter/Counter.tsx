import { useState } from "react";
import { useTranslation } from "react-i18next";

const Counter = () => {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return <button onClick={handleClick}>{t("Count is", { count })}</button>;
};

export default Counter;
