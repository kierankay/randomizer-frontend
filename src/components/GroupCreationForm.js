import React from 'react';

class GroupQueryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minDistance: 5,
      group: {
        id: 1,
        project: "Jobly",
        date: "7/25/19",
        cohort: "r13",
        pairs: [
          { student_1: { first_name: "Andy", last_name: "Apple" }, student_2: { first_name: "Bob", last_name: "Brodie" } },
          { student_1: { first_name: "Charlie", last_name: "Chaplain" }, student_2: { first_name: "Dario", last_name: "Dumas" } },
          { student_1: { first_name: "Edgar", last_name: "Eaves" }, student_2: { first_name: "Filthy", last_name: "Frank" } },
          { student_1: { first_name: "Gina", last_name: "Galpagos" } }
        ]
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.processSubmit(this.state.minDistance)
  }

  render() {
    return (
      <div className="col-6">
      <h3>Generate a randomized group</h3>
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="minDistance">Minimum distance to last pairing</label>
          <input type="number"
            className="form-control" name="minDistance" id="minDistance" aria-describedby="helpId" placeholder="" value={this.state.minDistance} />
          <small id="helpId" className="form-text text-muted">Defaults to cohort size - 1 if input >= cohort size</small>
        </div>
        <button type="submit" className="btn btn-primary">Generate</button>
      </form>
      </div>
    )
  }
}

export default GroupQueryForm;