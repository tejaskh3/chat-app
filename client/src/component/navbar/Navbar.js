import React from 'react'
import styles from "./Navbar.module.css"
import logo from "../../assets/logo-3.svg"
import Button from '../button/Button'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="Sharding Meets" />
      <div className={styles.btnContainer}>
        <Button title={"Login"} className={styles.btn} link={"login"}/>
        <Button title={"Register"} link={"register"} className={styles.btn}/>
      </div>
    </div>
  )
}

export default Navbar
