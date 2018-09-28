import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class ReplyForm extends Component {
  state = {
    messageInputValue: '',
  }

  onInputChange = (event) => {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmitForm(this.props.ticket.id, this.state.messageInputValue)
    .then((response) => {
      this.setState({
        messageInputValue: ''
      });
    });
  }

  onCloseTicketHandler = (event) => {
    event.preventDefault();
    this.props.onCloseTicket(this.props.ticket.id);
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.onSubmitHandler}>
          <FormGroup controlId="message">
            <ControlLabel htmlFor="message">Reply</ControlLabel>
            <FormControl name="messageInputValue" onChange={this.onInputChange} value={this.state.messageInputValue} id="message" componentClass="textarea" />
          </FormGroup>
          <Button type="submit">Send</Button>
          <Button onClick={this.onCloseTicketHandler}>Close ticket</Button>
        </form>
      </div>
    );
  }
}
