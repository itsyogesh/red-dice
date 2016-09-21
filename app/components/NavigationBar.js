import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-fixed-top">
      <Link to="/" className="navbar-brand">Reddice</Link>
      <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbar">&#9776;</button>
      <div className="collapse navbar-toggleable-xs" id="navbar">
        <ul className="nav navbar-nav pull-sm-right">
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
