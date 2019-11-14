import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import RandomizeApi from '../../RandomizeApi'

const ResetPasswordForm = props => {
  const [password, setPassword] = useState('');
  const [validToken, setValidToken] = useState(false);
  const [sent, setSent] = useState(false);
  const { match } = props
  const token = match.params.token;

  useEffect(() => {
    async function fetchData() {
      setValidToken(await RandomizeApi.checkPasswordToken(token));
    }
    fetchData()
  }, [])

  async function handleSubmit(evt) {
    evt.preventDefault();
    await RandomizeApi.resetPassword(password, token);
    setSent(true);
  }

  return (
    <div className="auth-container col-lg-5 col-md-6 col-sm-8">
      <h2 className="text-center my-4">Reset Password</h2>
      {validToken ?
        (sent ?
          <React.Fragment>
            <div>Password reset successful. <Link to="/login">Log in</Link> with your new credentials.</div>
          </React.Fragment> :
          <React.Fragment>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input type="password" required
                  className="form-control" name="password" id="password" aria-describedby="helpId" placeholder="" value={password} onChange={evt => setPassword(evt.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary btn-block my-2">Save New Password</button>
            </form>
          </React.Fragment>) :
        <React.Fragment>
          <div>Invalid token</div>
        </React.Fragment>}
    </div>
  )
}

export default ResetPasswordForm;