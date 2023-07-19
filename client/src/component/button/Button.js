import React from 'react'
import styles from './Button.module.css'
import { Link } from "react-router-dom";
const Button = ({link, title}) => {
  return (
    <div className={styles.container}>
      <Link className={styles.btn} to={link}>{title}</Link>
    </div>
  )
}

export default Button
