import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { z, ZodError, ZodIssue } from "zod";
import { VARIANT } from "../../../../constants";
import InputPassword from "../../InputPassword";
import { InputTemplateProps } from "../../InputTemplate/v2";
import styles from "../InputPasswordWithRequirements.module.css";

const schema = z.object({
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, "One uppercase letter")
    .regex(/[0-9]/, "One number")
    .regex(/[^A-Za-z0-9]/, "One special character"),
});

const InputPasswordWithRequirements: FC<InputTemplateProps> = ({
  value,
  variant = VARIANT.PRIMARY,
  ...rest
}) => {
  const { t } = useTranslation();
  const [errors, setErrors] = useState([] as ZodIssue[]);

  useEffect(() => {
    const { error } = schema.safeParse({
      password: value,
    }) as { error: ZodError };

    setErrors(error?.issues || []);
  }, [value]);

  const requirementsContainerTopClasses = classNames(
    styles["requirements__container--top"],
    styles[variant],
    styles[`indicator-length--${4 - errors.length}`]
  );

  const requirementsContainerBottomClasses = classNames(
    styles["requirements__container--bottom"],
    styles[variant]
  );

  return (
    <>
      <div className={styles["with-requirements__wrapper"]}>
        <div className={styles["with-requirements__container--top"]}>
          <InputPassword.V2 value={value} {...rest} />
        </div>
        <div className={styles["with-requirements__container--bottom"]}>
          <div className={requirementsContainerTopClasses}>
            <div className={styles["requirement--indicator"]}></div>
            <div className={styles["requirement--indicator"]}></div>
            <div className={styles["requirement--indicator"]}></div>
            <div className={styles["requirement--indicator"]}></div>
          </div>

          {errors.length > 0 && (
            <div className={requirementsContainerBottomClasses}>
              {t(errors[0].message)}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InputPasswordWithRequirements;
