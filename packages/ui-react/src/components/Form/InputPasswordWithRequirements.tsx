import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { z, ZodError, ZodIssue } from "zod";
import { IInputProps } from './_InputContext'
import InputPassword from "./InputPassword";
import styles from "./InputPasswordWithRequirements.module.css"
import { VARIANT } from "../../constants";

const schema = z.object({
    password: z
        .string()
        .min(8)
        .regex(/[A-Z]/, "One uppercase letter")
        .regex(/[0-9]/, "One number")
        .regex(/[^A-Za-z0-9]/, "One special character")

})

const InputPasswordWithRequirements: FC<IInputProps> = ({variant = VARIANT.PRIMARY, value, ...rest}) => {
    const {t} = useTranslation()
    const [errors, setErrors] = useState([] as ZodIssue[]);

    useEffect(() => {
        const {error} = schema.safeParse({
            password: value
        }) as { error: ZodError }

        setErrors(error?.issues || [])
    }, [value])

    const requirementContainer = classNames(
        styles["requirement-container"],
        styles[variant],
        styles[`requirement-container__indicator-length-${4 - errors.length}`]
    )

    const requirementInfo = classNames(styles["requirement-info"], styles[variant])

    return <div>
        <InputPassword variant={variant} value={value} {...rest} />
        <div className={styles["requirement-wrapper"]}>
            <div className={requirementContainer}>
                <div className={styles["requirement-container--indicator"]}>
                </div>
                <div className={styles["requirement-container--indicator"]}>
                </div>
                <div className={styles["requirement-container--indicator"]}>
                </div>
                <div className={styles["requirement-container--indicator"]}>
                </div>
            </div>
            {errors.length > 0 && <div className={requirementInfo}>{t(errors[0].message)}</div>}
        </div>
    </div>
}

export default InputPasswordWithRequirements