import React from 'react';
import styles from './ShowUser.module.scss'

const ShowUser = ({user}) => {
  return (
    <div className={styles.showUserContainer}>
      <h4>Importante</h4>

      <p>la orden se va a crear para:</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>

    </div>
  );
};

export default ShowUser;
