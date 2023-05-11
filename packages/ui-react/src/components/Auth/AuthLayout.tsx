import { FC, PropsWithChildren } from "react";

import styles from "./AuthLayout.module.css";

type AuthLayoutProps = PropsWithChildren;

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div className={styles["auth-layout__wrapper"]}>{children}</div>;
};

export default AuthLayout;
