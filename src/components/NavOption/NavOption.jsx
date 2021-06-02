import React from 'react';
import styles from './NavOption.module.scss'

const NavOption = ({isActive, text, isSecondary, children}) => {
    return (
        <div className={`${styles.navOption} ${isActive ? styles.active : ''} ${isSecondary ? styles.isSecondary : ''}`}>
            {children && (
                <div>
                    {children}
                </div>
            )}
            {text}
        </div>
    );
};

export default NavOption;
