import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, minLength, maxLength, emailValid } from '../validation';

import { customInput } from './fields';
import './loginForm.css';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="LoginForm">
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            component={customInput}
            type="text"
            label="Email"
            validate={[required, emailValid]}
          />
          <Field
            name="pass"
            component={customInput}
            type="password"
            label="Password"
            validate={[required, minLength, maxLength]}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

LoginForm = reduxForm({
  form: 'register'
})(LoginForm);

export default LoginForm;
