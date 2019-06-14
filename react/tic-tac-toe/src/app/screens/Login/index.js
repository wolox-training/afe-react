import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';

import { fetchUsers, sendToken } from '../../../redux/users/actions';

import LoginForm from './components/LoginForm';

class LoginFormContainer extends Component {
  componentDidMount() {
    const { getUsers, dispatchToken, history } = this.props;
    if (window.localStorage.getItem('token')) {
      dispatchToken(window.localStorage.getItem('token'));
      history.push('/game');
    }
    getUsers();
  }

  submit = values => {
    const { users, dispatchToken, history } = this.props;
    users.forEach(user => {
      if (values.email === user.email && values.pass === user.password) {
        // TODO cambiar la funcion sendToken x selectedUser
        dispatchToken(user.token);
        history.push('/game');
        window.localStorage.setItem('token', user.token);
      } else {
        throw new SubmissionError({
          pass: 'Incorrect username or password'
        });
      }
    });
  };

  render() {
    return <LoginForm onSubmit={this.submit} />;
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(fetchUsers()),
  dispatchToken: (token) => dispatch(sendToken(token))
});

LoginFormContainer.propTypes = {
  dispatchToken: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
