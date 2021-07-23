import React, {useEffect} from 'react';
import styles from './CardMessage.module.scss'

const CardMessage = ({message, show, setShowMessage, time = 4500}) => {
  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), time)
    return () => clearTimeout(timer);
  }, [show, setShowMessage])

  const handleCloseMessage = () => {
    setShowMessage(prev => !prev)
  }

  return (
    <div
      onClick={handleCloseMessage}
      className={`${styles.cardMessageContainer} ${styles.success} ${show ? styles.open : styles.close}`}>
      {message}
    </div>
  );
};

export default CardMessage;
