import React from 'react';
import styles from "./Title.module.scss";

const Title = ({text}) => {
    return (
        <div>
            <h3 className={styles.title}>{text}</h3>
        </div>
    );
};

export default Title;
