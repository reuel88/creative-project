import { useTranslation, Trans } from "react-i18next";
import { ChangeEvent, FormEvent, useState } from "react";
import { InputEmail, InputPassword } from '../Form';
import { Button } from '../Button';
import { Link } from "../Link";

import styles from './SignInForm.module.css'

const SignInForm = () => {
    const {t} = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return <section className={styles["form__wrapper"]}>
        <div className={styles["form__container"]}>
            <form className={styles["form"]} onSubmit={handleSubmit}>
                <header className={styles["form__header"]}>
                    <h1 className={styles["form__heading"]}>{t("Log in to Classified")}</h1>
                    <p>
                        <Trans i18nKey={"By logging in to Classified"}>
                            By logging in to Classified, I agree to the
                            <Link href={"https://google.com"}>Conditions of use</Link> and
                            <Link href="https://bing.com">Privacy policy</Link>
                        </Trans>
                    </p>
                </header>

                <div className={styles["form__content"]}>
                    <InputEmail
                        id={'email'}
                        label={t("Email")}
                        value={email}
                        onChange={handleEmailChange}
                    />

                    <InputPassword
                        id="password"
                        label={t("Password")}
                        value={password}
                        onChange={handlePasswordChange}
                    />

                    <Button type="button">{t("Login")}</Button>

                    <div>
                        <Link href="/">{t("Forgot your password?")}</Link>
                    </div>
                </div>

                <footer className={styles["form__footer"]}>
                    <p className={styles["form__footer--end"]}>
                        <Trans i18nKey={"Don't have an account"}>
                            Don't have an account? <Link href={"https://google.com"}>Sign up</Link>
                        </Trans>
                    </p>
                </footer>
            </form>
        </div>
    </section>
}

export default SignInForm;