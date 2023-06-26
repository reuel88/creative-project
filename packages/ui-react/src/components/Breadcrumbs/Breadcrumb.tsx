import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FC, useRef } from "react";
import { AriaBreadcrumbItemProps, useBreadcrumbItem } from "react-aria";
import styles from "./Breadcrumb.module.scss";

type BreadcrumbProps = AriaBreadcrumbItemProps & {
  children: JSX.Element | JSX.Element[];
  href?: string;
};

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const { children, isCurrent, href } = props;
  const ref = useRef(null);
  const { itemProps } = useBreadcrumbItem(props, ref);

  return (
    <li className={styles["breadcrumb"]}>
      {!isCurrent ? (
        <a
          className={styles["breadcrumb__link"]}
          ref={ref}
          href={href}
          {...itemProps}
        >
          {children}
        </a>
      ) : (
        <span ref={ref} {...itemProps}>
          {children}
        </span>
      )}
      {!isCurrent && (
        <FontAwesomeIcon
          className={styles["breadcrumb__icon"]}
          icon={faAngleRight}
        />
      )}
    </li>
  );
};

export default Breadcrumb;
