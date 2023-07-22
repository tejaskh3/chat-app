import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './UsersList.module.css';
import UserBar from '../user-bar/UserBar';
import robot from '../../assets/robot.gif'
const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
let response;
  const getUsers = async () => {
    try {
       response = (await axios.get('http://127.0.0.1:8080/api/v1/getusers'));
      setUsers(response.data.users); // Store the data in the users state
      console.log(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
      {users.map((user,index)=>{
        return <UserBar key={user._id} className={styles.userBar} userName={user.username} image={user.image}/>
      })}
      </div>
      <div className={styles.chatContainer}>
        <h3>Select anyone and start chatting.</h3>
        <img src={robot} alt="robot" />
      </div>
    </div>
  );
};

export default UsersList;
