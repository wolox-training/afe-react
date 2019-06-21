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

function App(props) {
  const { token, selectedUser } = props;
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route render={() => token && <Topbar props={props} />} />
        <Route
          path="/game" render={(props)=> token ? <Game props={props} />
            : <Redirect to="/" />
          }
        />
        <Route path="/profile" render={() => token ? <Profile user={selectedUser} /> : <Redirect to="/" />} />
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  token: state.login.token
});

App.propTypes = {
  selectedUser: PropTypes.object,
  token: PropTypes.string
};

export default connect(mapStateToProps)(App);
