import React, {useContext, useState} from 'react';
import styles from './NavBar.module.scss'
import {IoClose, IoMenu} from "react-icons/all";
import {Link} from "react-router-dom";
import NavOptions from "../NavOptions/NavOptions";
import CartWidget from "../CartWidget/CartWidget";
import CartContext from "../../context/cartContext";

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const {cart} = useContext(CartContext);

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
                    <CartWidget qtyItems={cart.length}/>
                </nav>
                <div className={styles.controlNavBarMobile}>
                    <CartWidget qtyItems={cart.length}/>
                    <div className={styles.menu} onClick={() => setShowMenu(prev => !prev)}>
                        {showMenu ? <IoClose className={styles.icon}/> : <IoMenu className={styles.icon}/>}
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className={styles.optionsMobile}>
                    <NavOptions setShowMenu={setShowMenu}/>
                </div>
            )}
        </div>
    );
};

export default NavBar;
