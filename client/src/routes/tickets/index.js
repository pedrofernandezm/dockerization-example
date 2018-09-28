import React, { Component } from 'react';
import TicketsList from '../../components/TicketsList/TicketsList.js'
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

export default class TicketsIndex extends Component{

  componentDidMount(){
    this.props.getTickets();
  }

  render(){
    return(
      <div className="tickets-index">
        <h2>Tickets</h2>
        <Button bsStyle="primary" className="link-button new-ticket pull-right">
          <Link to="/tickets/new">
            New ticket
          </Link>
        </Button>
        <TicketsList tickets={this.props.tickets} />
      </div>
    );
  }

}
