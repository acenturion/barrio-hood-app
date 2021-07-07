import React, {useEffect} from 'react';
import styles from './CardMessage.module.scss'

const CardMessage = ({message, show, setShowMessage}) => {
  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 3000)
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
