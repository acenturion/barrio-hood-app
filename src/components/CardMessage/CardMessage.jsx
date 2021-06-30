import React, {useEffect, useState} from 'react';
import styles from './CardMessage.module.scss'

const CardMessage = ({type, message, show = false}) => {

    const [showMessage, setShowMessage] = useState(show);

    useEffect(() => {
        const timer = setTimeout(() => setShowMessage(false), 3000)
        return() => clearTimeout(timer);
    },[])

    const handleCloseMessage = () => {
        setShowMessage(prev => !prev)
    }

    return (
        <div
            onClick={handleCloseMessage}
            className={`${styles.cardMessageContainer} ${styles.success} ${showMessage ? styles.open : styles.close}`}>
            {message}
        </div>
    );
};

export default CardMessage;
