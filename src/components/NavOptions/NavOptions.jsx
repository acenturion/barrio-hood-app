import React from 'react';
import styles from "./NavOptions.module.scss";
import {Link, useLocation} from "react-router-dom";


const NavOptions = () => {
    const {pathname} = useLocation();

    const isCurrentActive = (route) => {
        return route === pathname ? styles.selected : '';
    }
    return (
        <>
            <Link to="/">
                <li className={isCurrentActive("/")}>Ofertas</li>
            </Link>
            <Link to="/tiendas">
                <li className={isCurrentActive("/tiendas")}>Home</li>
            </Link>
            <Link to="/supermercado">
                <li className={isCurrentActive("/supermercado")}>Supermercado</li>
            </Link>
        </>
    );
};

export default NavOptions;
