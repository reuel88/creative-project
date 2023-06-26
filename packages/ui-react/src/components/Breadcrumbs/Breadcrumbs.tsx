import { Children, cloneElement, FC } from "react";
import { AriaBreadcrumbsProps, useBreadcrumbs } from "react-aria";
import styles from "./Breadcrumbs.module.scss";

type BreadcrumbsProps = AriaBreadcrumbsProps & {
  children: JSX.Element | JSX.Element[];
};

const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const { children } = props;
  const { navProps } = useBreadcrumbs(props);
  const childCount = Children.count(children);

  return (
    <nav {...navProps}>
      <ol className={styles["breadcrumbs"]}>
        {Children.map(children, (child, i) =>
          cloneElement(child, { isCurrent: i === childCount - 1 })
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
