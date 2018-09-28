import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Ticket from '../../components/Ticket/index.js';

let ticket = {
  attributes: {
    subject: "Some subject",
    description: "Some text",
    author: "customer@tickets.com",
    "created-at": "2017-02-25T06:19:58.000Z"
  }
};

let component;

describe('Ticket', () => {

  beforeEach( () => {
    component = <Ticket ticket={ticket} />;
  });

  it('renders without crashing', () => {
    var subject = shallow(component).find('h4.subject');
    expect(subject.exists()).toBe(true);
  });

  it('renders the ticket description', () => {
    expect(shallow(component).contains(<p>Some text</p>)).toBe(true);
  });

});
