import React from 'react';
import moment from 'moment';

export default function Ticket ({ ticket }) {
  return(
    <div className="panel panel-primary">
      <div className="panel-heading">
        <div className="panel-title">
          <h4 className="subject">{ ticket.attributes.subject }</h4>
        </div>
      </div>
      <div className="panel-body">
        <p>{ ticket.attributes.description }</p>
      </div>
      <div className="panel-footer">
        <span className="info">Posted by { ticket.attributes.author }</span>
        <span className="date pull-right">{ moment(ticket.attributes['created-at']).fromNow() }</span>
      </div>
    </div>
  );
}
