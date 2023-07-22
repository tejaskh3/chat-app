import React from 'react';
import styles from './UserBar.module.css';
const UserBar = ({ userName, image }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="profile" />
      <p>{userName}</p>
    </div>
  );
};

export default UserBar;
