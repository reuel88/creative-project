import { ComponentType, createContext, useContext, useState } from "react";

export type TViewProp = "list" | "grid" | "map" | "inspect";

interface IListingProps {
  title: string;
  view?: TViewProp;
}

interface IListingContext extends IListingProps {
  toggleView: (value: TViewProp) => void;
}

type TUseListingProviderValue = (props: IListingProps) => IListingContext;

const ListingContext = createContext({} as IListingContext);

export const useListingContext = () => {
  return useContext(ListingContext);
};

export const useListingProviderValue: TUseListingProviderValue = ({
  title,
  view: defaultView,
}) => {
  const [view, setView] = useState(defaultView || "list");

  const toggleView = (value: TViewProp) => {
    setView(value);
  };

  return {
    title,
    view,
    toggleView,
  };
};

export const withListing = <P extends IListingProps>(
  Component: ComponentType
) => {
  return (props: P) => {
    const value = useListingProviderValue(props);

    return (
      <ListingContext.Provider value={value}>
        <Component />
      </ListingContext.Provider>
    );
  };
};

export default ListingContext;
