import { FocusEvent, useEffect, useState } from "react";
import { InputTemplateProps } from "../components/Form/InputTemplate/v2";

type useIsActiveHook = (
  props: InputTemplateProps
) => [boolean, InputTemplateProps];

export const useIsActive: useIsActiveHook = (props) => {
  const [flagActive, setFlagActive] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    !flagActive && setIsActive((props?.value || "").trim().length > 0);
  }, [flagActive, isActive, props.value]);

  const activeProps = {
    ...props,
    onBlur: (e: FocusEvent<Element, Element>) => {
      setFlagActive(false);
      if (typeof props.onBlur === "function") props.onBlur(e);
    },
    onFocus: (e: FocusEvent<Element, Element>) => {
      setFlagActive(true);
      setIsActive(true);
      if (typeof props.onFocus === "function") props.onFocus(e);
    },
  };

  return [isActive, activeProps];
};
