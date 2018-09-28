import React from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default function LoginForm({ onSubmitForm, onInputChange, emailInputValue, passwordInputValue }) {
  return(
    <form action="" onSubmit={onSubmitHandler}>
      <FormGroup controlId="email">
        <ControlLabel htmlFor="email">Email</ControlLabel>
        <FormControl name="emailInputValue" onChange={onInputChange} value={emailInputValue} id="email" type="text" />
      </FormGroup>
      <FormGroup controlId="password">
        <ControlLabel htmlFor="password">Password</ControlLabel>
        <FormControl name="passwordInputValue" onChange={onInputChange} value={passwordInputValue} id="password" type="password" />
      </FormGroup>
      <Button bsStyle="primary" type="submit">Sign in</Button>
    </form>
  );

  function onSubmitHandler(event){
    event.preventDefault();
    onSubmitForm(emailInputValue, passwordInputValue);
  }
}
