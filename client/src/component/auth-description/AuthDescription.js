import React from 'react'
import styles from './AuthDescription.module.css'
import logo from "../../assets/logo-3.svg"
const AuthDescription = () => {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="Sherdings meet" />
      <h1 className={styles.heading}>Get Exclusive access to the Sherdings System</h1>
      <p className={styles.subHeading}>Welcome to our platform! Whether you're a new user or returning member, our login and registration page provides a seamless experience to access our services.<br></br> Registering with us is quick and easy – simply provide your necessary details, such as your name, email, and a secure password. <br></br>Once registered, you can log in with your chosen credentials and gain full access to our platform's features. <br></br>We prioritize the security and privacy of our users, ensuring that your information is safeguarded at all times. If you're already a member,<br></br> simply enter your username or email and password to log in and continue your journey with us. Join our community today and unlock a world of possibilities!</p>
    </div>
  )
}

export default AuthDescription
