import { connect } from 'react-redux';
import AdminConsole from '../components/screens/AdminConsole';
import { getStudentsFromApi, addStudentToApi } from '../store/actionCreators';

function mapStateToProps(state) {
  return {
    currentCohort: state.currentCohort,
    currentCohortStudents: state.currentCohortStudents,
  };
}

const mapDispatchToProps = {
  getStudentsFromApi,
  addStudentToApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminConsole);
