import { connect } from "react-redux";
import AdminConsole from '../components/AdminConsole';
import { addStudentToCohort } from '../actionCreators';

function mapStateToProps(state) {
  return {
    currentCohort: state.currentCohort
  }
}

// const mapDispatchToProps = {
//   addStudentToCohort
// }

export default connect(mapStateToProps,
  // mapDispatchToProps
)(AdminConsole);