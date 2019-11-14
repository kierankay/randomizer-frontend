import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { createUser, history } = props;

  async function handleSubmit(evt) {
    evt.preventDefault();
    await createUser(username, email, password)
    history.push('/');
  }

  return (
    <div className="auth-container col-lg-5 col-md-6 col-sm-8">
      <h2 className="text-center my-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text"
            className="form-control" name="username" id="username" aria-describedby="helpId" placeholder="" value={username} onChange={evt => setUsername(evt.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text"
            className="form-control" name="email" id="email" aria-describedby="helpId" placeholder="" value={email} onChange={evt => setEmail(evt.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password"
            className="form-control" name="password" id="password" aria-describedby="helpId" placeholder="" value={password} onChange={evt => setPassword(evt.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary btn-block my-2">Sign Up</button>
        <div className="auth-links">
          <Link to="/login" className="text-right">I already have an account</Link>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm;