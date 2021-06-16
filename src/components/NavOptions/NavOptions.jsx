import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NavOptions.module.scss'

const NavOptions = ({setShowMenu = () => {}}) => {
    return (
        <div className={styles.navOptionsController} onClick={() => setShowMenu(false)}>
            <NavLink to="/ofertas" activeClassName={styles.selected}>
                Ofertas
            </NavLink>
            <NavLink to="/tiendas" activeClassName={styles.selected} >
                Tiendas
            </NavLink>
            <NavLink to="/supermercado" activeClassName={styles.selected}>
                Supermercado
            </NavLink>
        </div>
    );
};

export default NavOptions;
