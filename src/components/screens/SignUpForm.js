import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState(false);
  const { createUser, history } = props;

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await createUser(username, email, password);

    // If there is a result, the password is invalid
    if (result) {
      console.log(result.constraint);
      if (result.constraint === "users_username_key") {
        setErrMsg("Username already exists");
      } else if (result.constraint === "users_email_key") {
        setErrMsg("Email address already in use");
      }
      
      // If there is no result, the user is logged in
    } else {
      history.push('/');
    }

  }

  return (
    <div className="auth-container col-lg-5 col-md-6 col-sm-8">
      <h2 className="text-center my-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" required
            className="form-control" name="username" id="username" aria-describedby="helpId" placeholder="" value={username} onChange={evt => setUsername(evt.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" required
            className="form-control" name="email" id="email" aria-describedby="helpId" placeholder="" value={email} onChange={evt => setEmail(evt.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" required
            className="form-control" name="password" id="password" aria-describedby="helpId" placeholder="" value={password} onChange={evt => setPassword(evt.target.value)} />
        </div>
        <p className="my2 text-center">{errMsg ? errMsg : null}</p>
        <button type="submit" className="btn btn-primary btn-block my-2">Sign Up</button>
        <div className="auth-links">
          <Link to="/login" className="text-right">I already have an account</Link>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm;