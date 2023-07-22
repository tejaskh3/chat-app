import React, { useEffect, useState } from 'react';
import AuthDescription from '../auth-description/AuthDescription';
import styles from './Register.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loader from '../../assets/loader.gif';
import SetAvatar from '../set-avatar/SetAvatar';
const Register = () => {
  // const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filledDetails, setfilledDetails] = useState(false);
  const [avatars, setAvatarts] = useState([]);
  let temp = [];
  for (let i = 0; i < 4; i++) {
    let num = Math.random() * 10000;
    temp.push(`https://api.multiavatar.com/Binx${num}.png`);
  }

  console.log(avatars);
  const handleSubmit = async (e) => {
    if (!userName || !password || !email) {
      alert('Please fill the form.');
      e.preventDefault();
      return;
    }
    setAvatarts(temp);
    console.log(temp);
    console.log(avatars);
    setfilledDetails(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, avatars.length === 4 || 3000);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.main}>
    <div className={styles.container}>
      {!isLoading && !filledDetails ? (
        <>
          <AuthDescription className={styles.authdesc}></AuthDescription>
          <div className={styles.formContainer}>
            <h3>Sign Up</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="User Name"
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </>
      ) : isLoading && filledDetails ? (
        <img src={loader} alt="" />
      ) : (
        // <h1> hello</h1>
        <SetAvatar
          userName={userName}
          email={email}
          password={password}
          avatars={avatars}
        />
      )}
    </div>
    </div>
  );
};

export default Register;
