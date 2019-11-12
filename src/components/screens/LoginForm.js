import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { logUserIntoApi, history } = props;

  async function handleSubmit(evt) {
    evt.preventDefault();
    await logUserIntoApi(username, password)
    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text"
          className="form-control" name="username" id="username" aria-describedby="helpId" placeholder="" value={username} onChange={evt => setUsername(evt.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password"
          className="form-control" name="password" id="password" aria-describedby="helpId" placeholder="" value={password} onChange={evt => setPassword(evt.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
      <Link to="/forgot-password"><button className="btn btn-primary mx-2">Forgot Password</button></Link>
    </form>
  )
}

export default LoginForm;