import classNames from "classnames";
import { FC } from "react";

import styles from "./Label.module.css";

export interface LabelProps {
    id: string,
    active: boolean,
    label: string
}

const Label:FC<LabelProps> = (
    {
        id,
        active,
        label
    }
) => {

    const labelClasses = classNames(
        styles['label'],
        {
            [styles['label--active']]: active,
        },
    );

    return <label
        className={labelClasses}
        htmlFor={id}
    >{label}</label>
}

export default Label;