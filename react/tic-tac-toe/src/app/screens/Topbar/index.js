import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FaSignOutAlt, FaUserCircle, FaChevronCircleLeft } from 'react-icons/fa';

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

  backGame = () => {
    this.props.history.push('/game');
  }

  render() {
    const { history } = this.props;
    return (
      <nav className={styles.navbar}>
        <img className={styles.navbarLogo} src={logo} alt="tic tac toe" />
        <div>
          {history.location.pathname === '/profile'
            ? <FaChevronCircleLeft className={styles.icon} onClick={this.backGame} />
            : <FaUserCircle className={styles.icon} onClick={this.profile} /> }
          <FaSignOutAlt className={styles.icon} onClick={this.exit} />
        </div>
      </nav>
    );
  }
}

export default withRouter(Topbar);
