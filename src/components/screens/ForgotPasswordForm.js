import React, { useState } from 'react';
import RandomizeApi from '../../RandomizeApi';

const ForgotPasswordForm = props => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  async function handleSubmit(evt) {
    evt.preventDefault();
    await RandomizeApi.requestPasswordReset(email);
    setSent(true);
  }

  return (
    <div className="auth-container col-lg-5 col-md-6 col-sm-8">
    <h2 className="text-center my-4">Request Password</h2>
      {sent ?
        <React.Fragment>
          <div>Please check your email for instructions to reset your password.</div>
        </React.Fragment> :
        <React.Fragment>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text"
                className="form-control" name="email" id="email" aria-describedby="helpId" placeholder="" value={email} onChange={evt => setEmail(evt.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary btn-block my-2">Request New Password</button>
          </form>
        </React.Fragment>
      }
    </div>
  )
}

export default ForgotPasswordForm;