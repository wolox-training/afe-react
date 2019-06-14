import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Game from './screens/Game';
import Login from './screens/Login';
import Profile from './screens/Profile';

import '../scss/application.scss';

function App(props) {
  const { token, users } = props;
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route
          path="/game" render={(props)=> token ? <Game props={props} />
            : <Redirect to="/" />
          }
        />
        <Route path="/profile" render={() => token ? <Profile users={users} /> : <Redirect to="/" />} />
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    token: state.users.token,
    users: state.users.users
  };
};

App.propTypes = {
  token: PropTypes.string
};

export default connect(mapStateToProps)(App);
