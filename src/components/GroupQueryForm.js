import React from 'react';

class GroupQueryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 5,
      cohort: "r13"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.processSubmit(this.state.limit, this.state.cohort)
  }

  render() {
    return (
      <div className="col-6">
        <h3>Display previous project groups</h3>
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="limit">Number of past project groups to show below</label>
          <input type="number"
            className="form-control" name="limit" id="limit" aria-describedby="helpId" placeholder="" value={this.state.limit} />
          <small id="helpId" className="form-text text-muted"></small>
        </div>
        <button type="submit" className="btn btn-primary">Show Groups</button>
      </form>
      </div>
    )
  }
}

export default GroupQueryForm;