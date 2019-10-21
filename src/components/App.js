import React from 'react';
import Routes from '../Routes';
import Navbar from './Navbar';

class App extends React.Component {
  async componentDidMount() {
    this.props.updateUserFromToken()
  }

  render() {
    return (
      <div>
        <Navbar loggedIn={this.props.user} clearUser={this.props.logUserOut} />
        <div className="container mt-3">
          <Routes loggedIn={this.props.user} updateUser={this.props.updateUserFromToken} />
        </div>
      </div>
    );
  }
}

export default App;
