import React from 'react';
import { shallow, mount, render } from 'enzyme';
import TicketsList from '../../components/TicketsList/TicketsList.js';
import { Label } from 'react-bootstrap';

let ticket = {
  id: "1",
  attributes: {
    subject: "Some subject",
    description: "Some text",
    author: "customer@tickets.com",
    "created-at": "2017-02-25T06:19:58.000Z",
    "aasm-state": "opened"
  }
};

let component;
let list;

describe('Ticket', () => {

  beforeEach( () => {
    list = [ticket, ticket, ticket];
    component = <TicketsList tickets={list} />;
  });

  it('renders without crashing', () => {
    var table = shallow(component).find('.tickets-table');
    expect(table.exists()).toBe(true);
  });

  it('renders the all tickets', () => {
    expect(shallow(component).find('tbody').children()).toHaveLength(3);
  });

  it('renders the state', () => {
  expect(shallow(component).contains(<Label bsStyle="danger">opened</Label>)).toBe(true);
  });

});
