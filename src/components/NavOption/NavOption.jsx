import React from 'react';
import styles from './NavOption.module.scss'

const NavOption = ({isActive, text, isSecondary, icon, children}) => {
    return (
        <div className={`${styles.navOption} ${isActive ? styles.active : ''} ${isSecondary ? styles.isSecondary : ''}`}>
            {icon && (
                <div className={styles.icon}>
                    {icon()}
                </div>
            )}
            {text}
        </div>
    );
};

export default NavOption;
