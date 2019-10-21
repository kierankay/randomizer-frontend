import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    localStorage.clear();
    this.props.clearUser()
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Home</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {this.props.loggedIn ?
              <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav nav-link" to="/admin">Admin Console</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn btn-primary" to="/login" onClick={this.logOut}>Log Out</NavLink>
              </li>
              </React.Fragment> :
              <li className="nav-item">
                <NavLink className="btn btn-primary" to="/login">Login</NavLink>
              </li>
            }
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;