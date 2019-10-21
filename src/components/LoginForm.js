import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    await this.props.logUserIntoApi(this.state.username, this.state.password)
    this.props.history.push('/');
  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text"
            className="form-control" name="username" id="username" aria-describedby="helpId" placeholder="" value={this.state.username} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text"
            className="form-control" name="password" id="password" aria-describedby="helpId" placeholder="" value={this.state.password} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    )
  }
}

export default LoginForm;