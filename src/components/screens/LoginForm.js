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
    <div className="auth-container col-lg-5 col-md-6 col-sm-8">
      <h2 className="text-center my-4">Log In</h2>
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
        <button type="submit" className="btn btn-primary btn-block my-2">Login</button>
        <div className="auth-links">
          <Link to="/forgot-password" className="text-right">I forgot my password</Link>
          <span> | </span>
          <Link to="/sign-up" className="text-right">Create an account</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;