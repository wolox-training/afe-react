import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sendToken } from '../redux/login/actions';

import Game from './screens/Game';
import Login from './screens/Login';

import '../scss/application.scss';

class App extends Component {
  async componentDidMount() {
    const { sendToken } = this.props;
    if (window.localStorage.getItem('token')) {
      await sendToken(window.localStorage.getItem('token'));
    }
  }

  render() {
    const { token } = this.props;
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route
            // eslint-disable-next-line react/jsx-no-bind
            path="/game" render={()=> token && <Game />}
          />
          {token ? <Redirect to="/game" /> : <Redirect to="/" />}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  token: state.users.token
});

const mapDispatchToProps = dispatch => ({
  sendToken: token => dispatch(sendToken(token))
});

App.propTypes = {
  token: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
