import { FocusEvent, useEffect, useState } from "react";
import { InputTemplateProps } from "../components/Form/InputTemplate/v2";
import { SelectTemplateProps } from "../components/Form/InputSelect/SelectTemplate";

type useIsActiveHook = (
  props: InputTemplateProps | SelectTemplateProps
) => [boolean, InputTemplateProps | SelectTemplateProps];

export const useIsActive: useIsActiveHook = (props) => {
  const [flagActive, setFlagActive] = useState(false);
  const [isActive, setIsActive] = useState(false);

  let value = "";

  if ("value" in props) {
    value = props.value || "";
  }

  if ("selectedKey" in props) {
    value = (props.selectedKey as string) || "";
  }

  useEffect(() => {
    !flagActive && setIsActive(value.trim().length > 0);
  }, [flagActive, isActive, value]);

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
