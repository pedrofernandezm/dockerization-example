import React, { Component } from 'react';
import Ticket from '../../components/Ticket';
import RepliesList from '../../components/Reply/RepliesList.js';
import ReplyForm from '../../components/Reply/ReplyForm.js';

export default class ShowTicket extends Component{

  componentDidMount(){
    this.props.getTicket(this.props.params.id);
  }

  openedTicket = () => {
    return this.props.ticket.attributes['aasm-state'] === 'opened' ? true : false;
  }

  render(){
    return(
      <div className="ticket-page">
        <Ticket ticket={this.props.ticket} />
        <RepliesList replies={this.props.replies} />
        { this.openedTicket() &&
          <ReplyForm onCloseTicket={this.props.closeTicket} ticket={this.props.ticket} onSubmitForm={this.props.createReply} />
        }
        { !this.openedTicket() &&
          <div className="alert alert-warning" role="alert">
            <p>This ticket is closed</p>
          </div>
        }
      </div>
    );
  }


}
