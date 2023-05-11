import reactLogo from '../../assets/react.svg'
import styles from './LogoLink.module.css'

const LogoLink = () => {
    return <a
        className={styles["logo-link"]}
        href="/">
        <img
            className={styles["logo-image"]}
            src={reactLogo} alt="React logo" />
    </a>
}

export default LogoLink;