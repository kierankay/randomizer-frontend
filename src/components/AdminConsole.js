import React from 'react';
import CohortSelectorContainer from '../containers/CohortSelectorContainer';
import CohortEditorContainer from '../containers/CohortEditorContainer';
import RandomizeApi from '../RandomizeApi';
import Cohort from './Cohort';


class AdminConsole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCohortStudents: []
    }
    this.loadCohortStudents = this.loadCohortStudents.bind(this);
  }

  async loadCohortStudents(cohort) {
    let result = await RandomizeApi.getStudentsFromCohort(cohort);
    await this.setState({currentCohortStudents: result})
  }

  render() {
    return (
      <React.Fragment>
        <CohortSelectorContainer loadIntoCohort={this.loadCohortStudents}/>
        <CohortEditorContainer />
        <Cohort cohort={this.props.currentCohort} students={this.state.currentCohortStudents} />
      </React.Fragment>
    )
  }
}

export default AdminConsole;

// cohort admin page
// see existing cohorts and students
// add cohort and edit students in that cohort
// removing a student should mark them as de-enrolled in database, not delete
// do not include disenrolled students in pairing, but show them in past pairs
// add student
// user admin page
// see all users
// add and remove privileges