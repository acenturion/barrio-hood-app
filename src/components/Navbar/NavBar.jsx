import React, {useState} from 'react';
import styles from './NavBar.module.scss'
import {IoClose, IoMenu} from "react-icons/all";
import {Link} from "react-router-dom";
import NavOptions from "../NavOptions/NavOptions";

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className={styles.navBarContainer}>
            <div className={styles.navBar}>
                <Link to="/">
                    <div className={styles.logoContainer}>
                        BarrioHood
                    </div>
                </Link>
                <nav className={styles.optionsDesktop}>
                    <NavOptions/>
                </nav>
                <div className={styles.controlNavBarMobile} onClick={() => setShowMenu(prev => !prev)}>
                    {showMenu ? <IoClose className={styles.icon}/> : <IoMenu className={styles.icon}/>}
                </div>
            </div>
            {showMenu && (
                <div className={styles.optionsMobile}>
                    <NavOptions/>
                </div>
            )}
        </div>
    );
};

export default NavBar;
