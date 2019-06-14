import React, { Component } from 'react';

export default class Profile extends Component {
  componentDidMount() {
    console.log('hola');
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        {users[0].email}
      </div>
    );
  }
}
