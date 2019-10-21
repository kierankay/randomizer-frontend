import React from 'react';

class CohortEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort: '',
      add: false,
      tab: 'add'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleadd = this.toggleadd.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    await this.props.addCohortToApi(this.state.cohort);
    this.setState({cohort: '', add:false})
  }

  toggleadd() {
    this.setState({
      add: !this.state.add
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.add ?
          <React.Fragment>
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="cohort">New cohort name</label>
                <input type="text"
                  className="form-control" name="cohort" id="cohort" aria-describedby="helpId" placeholder="" value={this.state.cohort} />
              </div>
              <button className="btn btn-primary">Submit</button>
              <button className="btn" onClick={this.toggleadd}>Cancel</button>
            </form></React.Fragment> : <button className="btn btn-primary mr-2" onClick={this.toggleadd}>Add Cohort</button>}
      </React.Fragment>
    )
  }
}

export default CohortEditor;