import { useState } from "react";
import { Button } from "../../components";
import { useTranslation } from "react-i18next";

const Counter = () => {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return <Button onClick={handleClick}>{t("Count is", { count })}</Button>;
};

export default Counter;
