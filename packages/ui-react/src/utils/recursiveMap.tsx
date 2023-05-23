import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";

type recursiveMapUtil = (
  children: ReactNode,
  fn: (child: FC) => ReactElement
) => ReactNode;

const recursiveMap: recursiveMapUtil = (children, fn) => {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child;
    }
    if (child.props.children) {
      child = cloneElement(child as ReactElement, {
        children: recursiveMap((child as ReactElement).props.children, fn),
      });
    }
    return fn(child);
  });
};

export default recursiveMap;
