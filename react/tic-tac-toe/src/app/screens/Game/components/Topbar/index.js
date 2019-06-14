import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

import styles from './styles.module.scss';
import logo from './logo.png';

class Topbar extends Component {
  exit = () => {
    window.localStorage.clear();
    this.props.history.push('/');
  }

  profile = () => {
    this.props.history.push('/profile');
  }

  render() {
    return (
      <nav className={styles.navbar}>
        <img className={styles.navbarLogo} src={logo} alt="tic tac toe" />
        <div>
          <FaUserCircle className={styles.icon} onClick={this.profile} />
          <FaSignOutAlt className={styles.icon} onClick={this.exit} />
        </div>
      </nav>
    );
  }
}

export default withRouter(Topbar);
