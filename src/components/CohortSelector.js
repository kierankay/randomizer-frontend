import React from 'react';

class CohortSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort: this.props.currentCohort || ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  // Review if the chain of data loading isn't doing something weird
  async componentDidMount() {
    await this.props.getCohortsFromApi(); 
    if (this.props.currentCohort) {// loads cohorts from server into redux store
      this.setState({cohort: this.props.currentCohort})
    } // add first cohort from server to redux store
  }

  async handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value }); // add cohort to state
    await this.props.updateCurrentCohort(this.state.cohort); // update currentCohort to redux
    if (this.props.loadIntoCohort) {
      this.props.loadIntoCohort(this.state.cohort)
    }
  }

  render() {
    let cohortFields = this.props.cohorts ? this.props.cohorts.map(c => <option value={c.cohort_name}>{c.cohort_name}</option>) : "Loading"
    return (
        <form onChange={this.handleChange}>
          <div className="form-group">
            <label htmlFor="cohort">Select a cohort</label>
            <select className="form-control" id="cohort" name="cohort">
              {cohortFields}
            </select>
          </div>
        </form>
    )
  }
}

export default CohortSelector;