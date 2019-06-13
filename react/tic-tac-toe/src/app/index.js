import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Game from './screens/Game';
import Login from './screens/Login';

import '../scss/application.scss';

function App(props) {
  const { token } = props;
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          path="/game" render={()=> token ? <Game />
            : <Redirect to="/" />
          }
        />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  token: state.users.token
});

App.propTypes = {
  token: PropTypes.string
};

export default connect(mapStateToProps)(App);
