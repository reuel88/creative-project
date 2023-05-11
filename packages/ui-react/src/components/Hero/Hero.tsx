import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, ComponentType, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import { InputText } from "../Form";

import styles from './Hero.module.css'

const RightComponent:ComponentType = () => {
    const {t} = useTranslation();
    return <Button
        className={styles["button"]}
    >
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        <span className={styles["button__text"]}>
            {t("Search")}
        </span>
    </Button>
}

const Hero = () => {
    const {t} = useTranslation();
    const [value, setValue] = useState('');

    function handleChange(e:ChangeEvent<HTMLInputElement>){
        setValue(e.target.value)
    }

    return <div className={styles.hero}>
        <form className={styles["hero-form"]}>
            <div className={styles["search-input"]}>
                <InputText
                    id={'location_postcode'}
                    rightComponent={RightComponent}
                    label={t("Location or Postcode")}
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </form>
    </div>
}

export default Hero;