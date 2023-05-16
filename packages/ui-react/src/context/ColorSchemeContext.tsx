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

export const useColorSchemeContext = () => {
  const context = useContext(ColorSchemeContext);

  if (context === undefined) {
    throw Error(
      "useColorSchemeContext must be used with a ColorSchemeContext.Provider"
    );
  }

  return context;
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

  const providerValue = {
    scheme,
    toggleScheme,
  };

  return (
    <ColorSchemeContext.Provider value={providerValue}>
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
