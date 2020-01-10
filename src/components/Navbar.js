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
      <NavLink className="navbar-brand" to="/">Randomizer</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
        <ul className="navbar-nav">
          {loggedIn ?
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav nav-link col-sm-12" to="/admin">Admin Console</NavLink>
              </li>
              <li className="nav-item mr-2">
                <NavLink className="btn btn-primary col-sm-12" to="/login" onClick={logOut}>Log Out</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn btn-primary col-sm-12" to="/settings">Settings</NavLink>
              </li>
            </React.Fragment> :
            <React.Fragment>
              <li className="nav-item mr-2">
                <NavLink className="btn btn-outline-primary col-sm-12" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn btn-primary btn-primary col-sm-12" to="/sign-up">Sign Up</NavLink>
              </li>
            </React.Fragment>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;