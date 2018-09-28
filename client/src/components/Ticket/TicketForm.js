import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class TicketForm extends Component {
  state = {
    subjectInputValue: '',
    descriptionInputValue: ''
  }

  onInputChange = (event) => {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmitForm(this.state.subjectInputValue, this.state.descriptionInputValue);
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.onSubmitHandler}>
          <FormGroup controlId="subject">
            <ControlLabel htmlFor="subject">Subject</ControlLabel>
            <FormControl name="subjectInputValue" onChange={this.onInputChange} value={this.state.subjectInputValue} id="subject" type="text" />
          </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel htmlFor="description">Description</ControlLabel>
            <FormControl name="descriptionInputValue" onChange={this.onInputChange} value={this.state.descriptionInputValue} id="description" componentClass="textarea" />
          </FormGroup>
          <Button type="submit">Create</Button>
        </form>
      </div>
    );
  }
}
