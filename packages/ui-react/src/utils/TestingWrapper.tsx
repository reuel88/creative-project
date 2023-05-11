import i18n from "i18next";
import { I18nextProvider } from "react-i18next";

const TestingWrapper = ({children, translations}) => {
    i18n.init({
        lng: "en",
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    ...translations,
                }
            }
        },
        interpolation: {
            escapeValue: false
        }
    });


    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

export default TestingWrapper