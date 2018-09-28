import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import LoginPage from './login';
import TicketsIndex from './tickets';
import NewTicket from './tickets/new.js';
import ShowTicket from './tickets/show.js';
import App from '../App.js';
import auth from '../utils/auth.js';

export default function getRoutes() {

  return (
    <Router history={browserHistory} >
      <Route path="/" component={App} onEnter={checkAuthentication} >
        <IndexRoute component={TicketsIndex} />
        <Route path="login" component={LoginPage} />
        <Route path="tickets" component={TicketsIndex} onEnter={checkAuthentication} />
        <Route path="/tickets/new" component={NewTicket} onEnter={checkAuthentication} />
        <Route path="/tickets/:id" component={ShowTicket} onEnter={checkAuthentication} />
      </Route>
    </Router>
  );

  function checkAuthentication(nextState, replace){
    if(location.pathname !== "/login" && !auth.loggedIn()){
      replace({
        state: nextState,
        pathname: "/login"
      });
    }
  }

}
