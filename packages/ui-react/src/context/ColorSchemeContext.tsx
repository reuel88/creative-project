import {
  ComponentType,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

const ColorSchemeContext = createContext({});

export const useColorScheme = () => {
  return useContext(ColorSchemeContext);
};

export const ColorSchemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [scheme, setScheme] = useState("light");

  useEffect(() => {
    const root = document.querySelector("html");

    if (root) {
      if (scheme === "light") {
        root.classList.add("light");
        root.classList.remove("dark");
      } else {
        root.classList.add("dark");
        root.classList.remove("light");
      }
    }
  }, [scheme]);

  const toggleScheme = () => {
    setScheme((scheme) => (scheme === "light" ? "dark" : "light"));
  };

  const context = {
    scheme,
    toggleScheme,
  };

  return (
    <ColorSchemeContext.Provider value={context}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

type Props = {
  [key: string]: unknown;
};

export const withColorScheme =
  <P extends Props>(Component: ComponentType<P>) =>
  (props: P) => {
    return (
      <ColorSchemeProvider>
        <Component {...props} />
      </ColorSchemeProvider>
    );
  };

export default ColorSchemeContext;
