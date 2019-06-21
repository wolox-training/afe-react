import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import styles from './styles.module.scss';


function Profile(props) {
  return (
    <div className={styles.grid}>
      <h2 className={styles.profileText}>Profile</h2>
      <div className={styles.profile}>
        <FaUserCircle className={styles.profileLogo} />
        <h2>Id: {props.login.id}</h2>
        <h2>Email: {props.login.email}</h2>
        <h2>Password: {props.login.password}</h2>
      </div>
    </div>
  );
}

export default Profile;
