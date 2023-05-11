import { useTranslation, Trans } from "react-i18next";
import { ChangeEvent, useState } from "react";
import { InputEmail, InputPasswordWithRequirements } from '../Form';
import { Button } from '../Button';
import { Link } from "../Link";

import styles from './SignUpForm.module.css'

const SignUpForm = () => {
    const {t} = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }

    function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    return <section className={styles["form__wrapper"]}>
        <div className={styles["form__container"]}>
            <form className={styles["form"]}>
                <header className={styles["form__header"]}>
                    <h1 className={styles["form__heading"]}>{t("Sign up to Classified")}</h1>
                    <p>
                        <Trans i18nKey={"By signing up to Classified"}>
                            By signing up to Classified, I agree to the <Link
                            variant="secondary"
                            href={"https://google.com"}
                        >Conditions of use</Link> and <Link
                            href="https://bing.com"
                            variant="secondary"
                        >Privacy policy</Link>
                        </Trans>
                    </p>
                </header>

                <div className={styles["form__content"]}>
                    <InputEmail
                        id={'email'}
                        label={t("Email")}
                        value={email}
                        variant={"secondary"}
                        onChange={handleEmailChange}
                    />

                    <InputPasswordWithRequirements
                        id="password"
                        label={t("Password")}
                        value={password}
                        variant={"secondary"}
                        onChange={handlePasswordChange}
                    />

                    <Button type="button" variant="secondary">{t("Sign up")}</Button>
                </div>

                <footer className={styles["form__footer"]}>
                    <p className={styles["form__footer--end"]}>
                        <Trans i18nKey={"Already have an account"}>
                            Already have an account? <Link href={"https://google.com"} variant="secondary">Log in</Link>
                        </Trans>
                    </p>
                </footer>
            </form>
        </div>
    </section>
}

export default SignUpForm;