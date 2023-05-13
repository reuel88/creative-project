import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, ComponentType, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as z from "zod";
import Button from "../Button";
import { InputText } from "../Form";

import styles from "./Hero.module.css";

const RightComponent = (isDirty: boolean) => {
  const Component: ComponentType = () => {
    const { t } = useTranslation();

    return (
      <Button className={styles["button"]} type="submit" disabled={!isDirty}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <span className={styles["button__text"]}>{t("Search")}</span>
      </Button>
    );
  };

  return Component;
};

const schema = z.object({
  location_postcode: z.string().min(2).optional().or(z.literal("")),
});

type TSchema = z.infer<typeof schema>;

const Hero = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<TSchema>({
    resolver: zodResolver(schema),
  });

  const locationPostcode = "location_postcode";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (data: TSchema) => {
    console.log(data);
  };

  return (
    <div className={styles.hero}>
      <form className={styles["hero-form"]} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles["search-input"]}>
          <InputText
            id={locationPostcode}
            error={errors[locationPostcode]?.message}
            label={t("Location or Postcode")}
            rightComponent={RightComponent(isDirty)}
            value={value}
            {...register(locationPostcode, { onChange: handleChange })}
          />
        </div>
      </form>
    </div>
  );
};

export default Hero;
