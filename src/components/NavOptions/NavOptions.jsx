import React from 'react';
import {Link, useLocation} from "react-router-dom";
import NavOption from "../NavOption/NavOption";


const NavOptions = ({setShowMenu = () => {}}) => {
    const {pathname} = useLocation();

    const isCurrentActive = (route) => {
        return route === pathname;
    }
    return (
        <>
            <Link to="/" onClick={() => setShowMenu(false)}>
                <NavOption text={'Ofertas'} isActive={isCurrentActive('/')}/>
            </Link>
            <Link to="/tiendas" onClick={() => setShowMenu(false)}>
                <NavOption text={'Tiendas'} isActive={isCurrentActive('/tiendas')}/>
            </Link>
            <Link to="/supermercado" onClick={() => setShowMenu(false)}>
                <NavOption text={'Supermecado'} isActive={isCurrentActive('/supermercado')}/>
            </Link>
        </>
    );
};

export default NavOptions;
