import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState(false);
  const { createUser, history } = props;

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await createUser(firstName, lastName, organization, email, password);
    console.log(result);
    // If there is a result, the password is invalid
    if (result) {
      if (result.constraint === "users_email_key") {
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
          <label htmlFor="firstName">First Name</label>
          <input type="text" required
            className="form-control" name="firstName" id="firstName" aria-describedby="helpId" placeholder="" value={firstName} onChange={evt => setFirstName(evt.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" required
            className="form-control" name="lastName" id="lastName" aria-describedby="helpId" placeholder="" value={lastName} onChange={evt => setLastName(evt.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="organization">Organization Name</label>
          <input type="text" required
            className="form-control" name="organization" id="organization" aria-describedby="helpId" placeholder="" value={organization} onChange={evt => setOrganization(evt.target.value)} />
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