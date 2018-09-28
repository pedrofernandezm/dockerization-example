import React from 'react';
import TicketForm from '../../components/Ticket/TicketForm.js';

export default function NewTicket({ createTicket }) {
  return(
    <div className="page-container">
        <div className="form-box wide">
          <h2>New ticket</h2>
        <TicketForm
          onSubmitForm={createTicket}
        />
      </div>
    </div>
  );
}
