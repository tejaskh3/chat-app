import React from 'react';
import AuthDescription from '../auth-description/AuthDescription';
import styles from './Register.module.css';
const Register = () => {
  return (
    <div className={styles.container}>
      <AuthDescription></AuthDescription>
      <div className={styles.formContainer}>
        <h3>Sign Up</h3>
        <form action="" className={styles.form}>
          <input type="text" placeholder="User Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
