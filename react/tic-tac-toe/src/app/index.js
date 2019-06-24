import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sendToken } from '../redux/login/actions';

import Game from './screens/Game';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Topbar from './screens/Topbar';

import '../scss/application.scss';

class App extends Component {
  componentDidMount() {
    if (window.localStorage.getItem('token')) {
      this.props.sendToken(window.localStorage.getItem('token'));
    }
  }

  render() {
    const { token, selectedUser } = this.props;
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/game" render={() => token ? <div><Topbar /> <Game /> </div> : <Redirect to="/" />} />
          <Route path="/profile" render={() => token ? <div><Topbar /> <Profile user={selectedUser} /></div> : <Redirect to="/" />} />
          {token && <Redirect to="/game" />}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  token: state.login.token,
  selectedUser: state.login.selectedUser
});
const mapDispatchToProps = dispatch => ({
  sendToken: token => dispatch(sendToken(token))
});

App.propTypes = {
  selectedUser: PropTypes.object,
  token: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
