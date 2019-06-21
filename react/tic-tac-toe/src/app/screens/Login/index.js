import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';

import { login, selectedUser } from '../../../redux/login/actions';

import LoginForm from './components/LoginForm';

class LoginFormContainer extends Component {
  submit = async values => {
    const { login, history } = this.props;
    const resp = await login(values);
    if (resp.ok) {
      history.push('/game');
    } else {
      throw new SubmissionError({
        password: 'Incorrect username or password'
      });
    }
  };

  render() {
    return <LoginForm onSubmit={this.submit} />;
  }
}

const mapDispatchToProps = dispatch => ({
  login: value => dispatch(login(value))
});

LoginFormContainer.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(LoginFormContainer);
