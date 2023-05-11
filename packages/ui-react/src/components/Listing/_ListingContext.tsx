import { ComponentType, createContext, useContext, useState } from "react";

export type TViewProp = "list" | "grid" | "map" | "inspect";

interface IListingProps {
  title: string;
  view?: TViewProp;
}

interface IListingContext extends IListingProps {
  toggleView: (value: TViewProp) => void;
}

type TUseListingContext = (props: IListingProps) => IListingContext;

const ListingContext = createContext({} as IListingContext);

export const useListing = () => {
  return useContext(ListingContext);
};

export const useListingContext: TUseListingContext = ({
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
    const context = useListingContext(props);

    return (
      <ListingContext.Provider value={context}>
        <Component />
      </ListingContext.Provider>
    );
  };
};

export default ListingContext;
