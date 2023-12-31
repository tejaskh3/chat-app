import React, { useState } from 'react';
import AuthDescription from '../auth-description/AuthDescription';
import styles from './Login.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async () => {
    console.log('chechiking');
    try {
      const res = await axios.post('http://127.0.0.1:8080/api/v1/login', {
        username: userName,
        password
      });
      console.log(res.data);
      alert('User loggedIn successfully');
      console.log('user loggedIn successfully');
      navigate('/');
    } catch (error) {
      alert(`${error}`);
      console.log(error);
    }
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
    <div className={styles.container}>
      <AuthDescription></AuthDescription>
      <div className={styles.formContainer}>
        <h3>Login</h3>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
