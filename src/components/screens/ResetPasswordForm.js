import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import RandomizeApi from '../../RandomizeApi'

const ResetPasswordForm = (props) => {
  const [password, setPassword] = useState('');
  const [validToken, setValidToken] = useState(false);
  const [sent, setSent] = useState(false);
  const { match } = props;
  const { token } = match.params;

  useEffect(() => {
    async function fetchData() {
      const validatedToken = await RandomizeApi.checkPasswordToken(token);
      setValidToken(validatedToken);
    }
    fetchData();
  }, []);

  async function handleSubmit(evt) {
    evt.preventDefault();
    await RandomizeApi.resetPassword(password, token);
    setSent(true);
  }

  let showIfValidToken;
  const showIfInvalidToken = <div>Invalid token</div>;

  if (sent) {
    showIfValidToken = (
      <div>
        Password reset successful.
        <Link to="/login">Log in</Link>
        with your new credentials.
      </div>
    );
  } else {
    showIfValidToken = (
      <>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              required
              className="form-control"
              name="password"
              id="password"
              aria-describedby="helpId"
              placeholder=""
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block my-2">Save New Password</button>
        </form>
      </>
    );
  }


  return (
    <div className="auth-container col-lg-5 col-md-6 col-sm-8">
      <h2 className="text-center my-4">Reset Password</h2>
      {validToken ? showIfValidToken : showIfInvalidToken}
    </div>
  );
};

export default ResetPasswordForm;
