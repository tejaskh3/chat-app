import React from 'react';
import AuthDescription from '../auth-description/AuthDescription';
import styles from './Login.module.css';
const Login = () => {
  return (
    <div className={styles.container}>
      <AuthDescription></AuthDescription>
      <div className={styles.formContainer}>
        <h3>Login</h3>
        <form action="" className={styles.form}>
          <input type="text" placeholder="User Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button type="submit">LogIn</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
