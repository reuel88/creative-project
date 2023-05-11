import classNames from "classnames";
import { FC, HTMLInputTypeAttribute } from "react";
import { useInput, withInput, IInputProps } from "./_InputContext";
import Label from "./Label";
import Input from "./Input";
import styles from "./InputTemplate.module.css";
import { VARIANT } from "../../constants";

const InputTemplate: FC = () => {
    const {
        id,
        leftComponent: LeftComponent,
        rightComponent: RightComponent,
        label,
        labelActive,
        type,
        value,
        variant = VARIANT.PRIMARY,
        handleBlur,
        handleChange,
        handleFocus,
    } = useInput();

    const wrapperClasses = classNames(styles["input-template__wrapper"], styles[variant])

    return <div className={wrapperClasses}>

        {LeftComponent && <LeftComponent className={styles["input-template__wrapper--left"]} />}

        <div className={styles['input-template__wrapper--middle']}>
            <Label id={id} active={labelActive} label={label} />
            <Input
                id={id}
                type={type}
                value={value}
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
            />
        </div>

        {RightComponent && <RightComponent className={styles["input-template__wrapper--right"]} />}

    </div>
}

export default withInput(InputTemplate) as FC<IInputProps & { type: HTMLInputTypeAttribute }>