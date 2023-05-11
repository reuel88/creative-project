import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import {initReactI18next} from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng:"en",
        fallbackLng: "en",
        debug: true,

        interpolation: {
            escapeValue: false
        }
    });

i18n.on("languageChanged", (locale) => {
    const direction = i18n.dir(locale);

    document.dir = direction;
});

export default i18n;