import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import styles from './styles.module.scss';


function Profile(props) {
  return (
    <div className={styles.grid}>
      <h2 className={styles.profileText}>Profile</h2>
      <div className={styles.profile}>
        {console.log(props)}
        <FaUserCircle className={styles.profileLogo} />
        <h2>Id: {props.user.id}</h2>
        <h2>Email: {props.user.email}</h2>
        <h2>Password: {props.user.password}</h2>
      </div>
    </div>
  );
}

export default Profile;
