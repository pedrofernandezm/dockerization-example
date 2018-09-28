import React, { Component } from 'react';
import LoginForm from './LoginForm.js';

export default class LoginFormContainer extends Component {
  state = {
    emailInputValue: '',
    passwordInputValue: ''
  }

  onInputChange(event) {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <LoginForm
          onSubmitForm={this.props.onSubmitForm}
          onInputChange={this.onInputChange.bind(this)}
          emailInputValue={this.state.emailInputValue}
          passwordInputValue={this.state.passwordInputValue}
        />
      </div>
    );
  }
}
