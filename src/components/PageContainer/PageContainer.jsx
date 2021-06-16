import React from 'react';
import Title from "../Title/Title";
import styles from './PageContainer.module.scss'

const PageContainer = ({title, children}) => {
    return (
        <div className={styles.pageContainer}>
            {title && (<Title text={title}/>)}
            {children}
        </div>
    );
};

export default PageContainer;
