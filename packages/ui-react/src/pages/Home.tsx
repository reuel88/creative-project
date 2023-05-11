import {Header, Hero, Listing} from '../components'
import { useTranslation } from "react-i18next";

const Home = () => {
    const {t}= useTranslation()

    return <>
        <Header/>

        <Hero/>

        <Listing title={t("List View")} />
    </>
}

export default Home;