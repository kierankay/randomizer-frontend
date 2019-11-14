import React, { useEffect } from 'react';
import Routes from './Routes';
import Navbar from './Navbar';
import '../App.css';

const App = (props) => {
  const { user, logUserOut, updateUserFromToken } = props

  useEffect(() => {
    props.updateUserFromToken()
  }, [])

  return (
    <div>
      <Navbar loggedIn={user} clearUser={logUserOut} />
      <div className="container mt-3">
        <Routes loggedIn={user} updateUser={updateUserFromToken} />
      </div>
    </div>
  );
}

export default App;
