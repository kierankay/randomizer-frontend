import { connect } from "react-redux";
import GroupsList from '../components/GroupsList';

function mapStateToProps(state) {
  return {
    currentCohort: state.currentCohort,
    currentCohortStudents: state.currentCohortStudents,
    cohorts: state.cohorts,
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);