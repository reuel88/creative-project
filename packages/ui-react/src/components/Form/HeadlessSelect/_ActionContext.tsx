import {
  createContext,
  FC,
  MutableRefObject,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useToggle from "../../../hooks/useToggle";
import useClickOutside from "../../../hooks/useClickOutside";
import { useSelectContext } from "./_SelectContext";

type context = {
  buttonRef: MutableRefObject<HTMLButtonElement>;
  open: boolean;
  optionsRef: MutableRefObject<HTMLUListElement>;
  selectRef: MutableRefObject<HTMLDivElement>;
  isActiveIndex: (index: number) => boolean;
  setActiveIndex: (index: number) => void;
  toggleOpen: (value?: boolean) => void;
};

const ActionContext = createContext({} as context);

export const useActionContext = () => {
  return useContext(ActionContext);
};

type useProviderValueFn = () => context;

export const useActionProviderValue: useProviderValueFn = () => {
  const { options, toggleByIndex } = useSelectContext();
  const selectRef = useRef({} as HTMLDivElement);
  const buttonRef = useRef({} as HTMLButtonElement);
  const optionsRef = useRef({} as HTMLUListElement);

  const [open, toggleOpen] = useToggle(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (open) setActiveIndex(0);
  }, [open]);

  useEffect(() => {
    const listener = (currentRef: MutableRefObject<HTMLElement>) => {
      const handler = (e: KeyboardEvent) => {
        if (e.target !== currentRef.current) return;
        switch (e.code) {
          case "Enter":
          case "Space":
            toggleOpen();
            if (open) toggleByIndex(activeIndex);
            break;
          case "ArrowUp":
          case "ArrowDown": {
            if (!open) {
              toggleOpen(true);
              break;
            }

            const newValue = activeIndex + (e.code === "ArrowDown" ? 1 : -1);
            if (newValue >= 0 && newValue < options.current.length) {
              setActiveIndex(newValue);
            }
            break;
          }
          case "Escape":
            toggleOpen(false);
            break;
        }
      };

      currentRef.current.addEventListener("keydown", handler);

      return () => currentRef.current.removeEventListener("keydown", handler);
    };

    const buttonListener = listener(buttonRef);
    const optionsListener = listener(optionsRef);

    return () => {
      buttonListener();
      optionsListener();
    };
  }, [activeIndex, open, options]);

  useClickOutside(selectRef, () => open && toggleOpen(false));

  const isActiveIndex = (index: number) => {
    return activeIndex === index;
  };

  return {
    buttonRef,
    open,
    optionsRef,
    selectRef,
    isActiveIndex,
    setActiveIndex,
    toggleOpen,
  };
};

export const ActionContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ActionContext.Provider value={useActionProviderValue()}>
      {children}
    </ActionContext.Provider>
  );
};

export default ActionContext;
