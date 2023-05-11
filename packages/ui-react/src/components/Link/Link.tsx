import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import  {VARIANT} from "../../constants"
import styles from './Link.module.css'

interface LinkProps extends PropsWithChildren {
    variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY,
    href: string
}

const Link: FC<LinkProps> = ({children, variant = VARIANT.PRIMARY, ...rest}) => {
    const linkClasses = classNames(styles["link"], styles[variant])

    return <a className={linkClasses} {...rest}>{children}</a>
}

export default Link;