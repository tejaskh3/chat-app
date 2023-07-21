import React, { useEffect, useState } from 'react';
import styles from './SetAvatar.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SetAvatar = ({ userName, email, password, avatars }) => {
  const [imgSelected, setImgSelected] = useState(-1);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {

      const res = await axios.post('http://127.0.0.1:8080/api/v1/register', {
        username: userName,
        email,
        password,
        image:avatars[imgSelected],
      });
      console.log(res);
      alert('User created successfully');
      console.log('user created successfully');
      navigate('/login');
    } catch (error) {
      alert(`${error}`);
      console.log(error);
    }

  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Selecet Avatar</h1>
      <div className={styles.imageContainer}>
        <img
          src={avatars[0]}
          alt="avatar"
          className={imgSelected === 0 ? `${styles.selectedImg}` : ''}
          onClick={() => {
            setImgSelected(0);
          }}
        />
        <img
          src={avatars[1]}
          alt="avatar"
          className={imgSelected === 1 ? `${styles.selectedImg}` : ''}
          onClick={() => setImgSelected(1)}
        />
        <img
          src={avatars[2]}
          alt="avatar"
          className={imgSelected === 2 ? `${styles.selectedImg}` : ''}
          onClick={() => setImgSelected(2)}
        />
        <img
          src={avatars[3]}
          alt="avatar"
          className={imgSelected === 3 ? `${styles.selectedImg}` : ''}
          onClick={() => setImgSelected(3)}
        />
      </div>
      <button className={styles.btn} onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default SetAvatar;
