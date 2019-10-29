import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  const { loggedIn, clearUser } = props;

  function logOut() {
    localStorage.clear();
    clearUser()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">Home</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {loggedIn ?
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav nav-link" to="/admin">Admin Console</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn btn-primary" to="/login" onClick={logOut}>Log Out</NavLink>
              </li>
            </React.Fragment> :
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="btn btn-primary" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn btn-primary" to="/sign-up">Sign Up</NavLink>
              </li>
            </React.Fragment>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;