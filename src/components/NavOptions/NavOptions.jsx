import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NavOptions.module.scss'

const NavOptions = ({setShowMenu = () => {}}) => {
    return (
        <div className={styles.navOptionsController} onClick={() => setShowMenu(false)}>
            <NavLink to="/home" activeClassName={styles.selected}>
                Destacados
            </NavLink>
            <NavLink to="/categoria/Termos" activeClassName={styles.selected} >
                Termos
            </NavLink>
            <NavLink to="/categoria/Electrodomesticos" activeClassName={styles.selected} >
                Electronica
            </NavLink>
        </div>
    );
};

export default NavOptions;
