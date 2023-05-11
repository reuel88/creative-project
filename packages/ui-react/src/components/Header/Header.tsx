import classNames from "classnames";
import {LogoLink} from "../Logo";
import {MenuButton} from "../Menu";
import {ProfileLink} from "../Profile";
import {SearchButton} from "../Search";

import styles from './Header.module.css';

const Header = () => {

    const middleLeft = classNames(styles["header-left"], styles["header-middle-left"])
    const middleRight = classNames(styles["header-right"], styles["header-middle-right"])

    return (<header className={styles.header}>
        {/*<div className="header-top"></div>*/}
        <div className={styles["header-middle"]}>
            <div className={middleLeft}>
                <LogoLink/>
            </div>
            {/*<div className="header-center"></div>*/}
            <div className={middleRight}>
                <SearchButton/>
                <ProfileLink/>
                <MenuButton/>
            </div>
        </div>
        {/*<div className="header-bottom"></div>*/}
    </header>)
}

export default Header;