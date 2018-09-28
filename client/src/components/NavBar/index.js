import React from 'react';
import auth from '../../utils/auth.js';
import { Link } from 'react-router';

export default function NavBar({ user, onLogoutHandler }) {

  return(
    <nav className="navbar navbar-default">
      <div className="container-fuild">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Home</Link>
        </div>
        { auth.loggedIn() &&
          <p className="session navbar-text pull-right">
            <span>Logged in as { user.email }</span>|
            <a href="#" onClick={ onLogoutHandler } className="navbar-link pull-right">Sign out</a>
          </p>
        }
      </div>
    </nav>
  );
}
