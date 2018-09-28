import React from 'react';
import { Table, Label } from 'react-bootstrap';
import { Link } from 'react-router';

export default function TicketsList({ tickets }){

  var labelState = (state) => {
    switch(state){
      case 'opened':
        return 'danger';
      default:
        return 'default';
    }
  }

  return(
    <Table striped bordered condensed hover className="tickets-table">
      <thead>
        <tr>
          <th>Subject</th>
          <th>Created at</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        { tickets.map(item =>
          <tr key={item.id}>
            <td><Link to={`/tickets/${item.id}`}>{item.attributes.subject}</Link></td>
            <td>{item.attributes['created-at']}</td>
            <td><Label bsStyle={ labelState(item.attributes['aasm-state']) }>{item.attributes['aasm-state']}</Label></td>
          </tr>) }
      </tbody>
    </Table>
  );
}
