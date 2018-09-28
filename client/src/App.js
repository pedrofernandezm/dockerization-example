import React, { Component } from 'react';
import axios from 'axios';
import AlertContainer from 'react-alert';
import { local } from 'storage.io';
import { browserHistory } from 'react-router';
import auth from './utils/auth.js';

import './App.css';

import NavBar from './components/NavBar';

class App extends Component {

  constructor(){
    super();

    this.state = {
      tickets: [],
      ticket: {
        attributes: {
          subject: "",
          description: ""
        }
      },
      replies: [],
      session: {
        token: "",
        expiresAt: "",
        userType: ""
      },
      user: {
        email: ''
      },
      alertOptions: {
        offset: 14,
        position: 'bottom right',
        theme: 'dark',
        time: 3000,
        transition: 'fade'
      }
    }
    this.getTickets = this.getTickets.bind(this);
  }

  requestHeaders(){
    return {
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    }
  }

  getTicket = (id) => {
  var url = `http://localhost:3100/api/${this.state.session.userType}/tickets/${id}`;
    return axios.get(url, { headers: this.requestHeaders() } )
      .then((response) => {
        this.getReplies(id);
        this.setState({
          ticket: response.data.data
        });
      })
  }

  getReplies = (ticketId) => {
  var url = `http://localhost:3100/api/tickets/${ticketId}/replies`;
    return axios.get(url, { headers: this.requestHeaders() } )
      .then((response) => {
        this.setState({
          replies: response.data.data
        });
      })
  }

  getToken(){
    var token = this.state.session.token;
    if(token){
      return `Bearer ${token}`;
    }
    return '';
  }

  getTickets(){
    var userType = this.state.session.userType;
    var url = `http://localhost:3100/api/${userType}/tickets`
    return axios.get(url, { headers: this.requestHeaders() } )
      .then((response) => {
        this.setState({
          tickets: response.data.data
        });
      })
  }

  loggedIn = () => {
    var token = local.get('token');
    if ( Boolean(token) ) {
      var expirationTime = new Date(local.get('expires-at'));
      var currentTime = new Date();
      return expirationTime > currentTime;
    }
    return false;
  }

  login = (email, password) => {
    return axios.post(
      'http://localhost:3100/api/sessions',
      { session: { email: email, password: password } },
      { headers: this.requestHeaders() }
    ).then((response) => {
      var data = response.data.data;
      var user = response.data.included[0];
      var session = data.attributes;
      var token = session['access-token'];
      var expiresAt = session['expires-at'];
      var userType = data.relationships.user.data.type;
      auth.storeSession(token, expiresAt, userType, user.attributes.email);
      this.setState(auth.loadSession());
      browserHistory.push('/tickets');
      this.msg.success('Signed in successfully');
    });
  }

  logout = (event) => {
    event.preventDefault();
    auth.removeSession();
    this.setState(auth.unloadSession());
    this.msg.success('Sign out successfully');
    browserHistory.push('/login');
  }

  closeTicket = (ticketId) => {
  var url = `http://localhost:3100/api/${this.state.session.userType}/tickets/${ticketId}/close`;
    return axios.post(
      url,
      { },
      { headers: this.requestHeaders() }
    ).then((response) => {
      this.setState({
        ticket: response.data.data
      });
      this.msg.success('Ticket closed successfully');
    });
  }


  createTicket = (subject, description) => {
    return axios.post(
      'http://localhost:3100/api/customers/tickets',
      {
        ticket: { subject: subject, description: description }
      },
      {
        headers: this.requestHeaders()
      }
    ).then((response) => {
      this.msg.success("Ticket created successfully");
      browserHistory.push('/tickets');
    });
  }

  createReply = (ticketId, message) => {
    var url = `http://localhost:3100/api/tickets/${ticketId}/replies`;
    return axios.post(
      url,
      {
        reply: { message: message }
      },
      {
        headers: this.requestHeaders()
      }
    ).then((response) => {
      this.msg.success("Reply sent successfully");
      var reply = response.data.data;
      var newReplies = this.state.replies.concat([reply]);

      this.setState({
        replies: newReplies
      });
    });
  }

  componentWillMount() {
    this.setState(auth.loadSession());
  }

  render() {
    var propsObject = Object.assign(
      {},
      this.state,
      {
        getTickets: this.getTickets,
        getTicket: this.getTicket,
        closeTicket: this.closeTicket,
        login: this.login,
        createTicket: this.createTicket,
        createReply: this.createReply
      }
    );
    return (
      <div>
        <AlertContainer ref={a => this.msg = a} {...this.state.alertOptions} />
        <NavBar user={this.state.user} onLogoutHandler={this.logout} />
        <div className="App container">
          <div className="row">
            { React.cloneElement(this.props.children, propsObject) }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
