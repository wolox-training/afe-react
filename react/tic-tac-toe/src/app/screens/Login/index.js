import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';

import { fetchUsers, sendToken, loggedUser } from '../../../redux/users/actions';

import LoginForm from './components/LoginForm';

class LoginFormContainer extends Component {
  async componentDidMount() {
    const { getUsers, dispatchToken, history, selectedUser } = this.props;
    await getUsers();
    if (window.localStorage.getItem('token')) {
      dispatchToken(window.localStorage.getItem('token'));
      this.props.users.forEach(user => {
        if (user.token === window.localStorage.getItem('token')) {
          selectedUser(user);
        }
      });
      history.push('/game');
    }
  }

  submit = values => {
    const { users, dispatchToken, history, selectedUser } = this.props;
    users.forEach(user => {
      if (values.email === user.email && values.pass === user.password) {
        dispatchToken(user.token);
        selectedUser(user);
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
  dispatchToken: token => dispatch(sendToken(token)),
  selectedUser: user => dispatch(loggedUser(user))
});

LoginFormContainer.propTypes = {
  dispatchToken: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  selectedUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
