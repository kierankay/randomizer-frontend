import { connect } from "react-redux";
import CohortEditor from '../components/CohortEditor';
import { addCohortToApi } from '../actionCreators';

function mapStateToProps(state) {
  return {
    cohorts: state.cohorts
  }
}

const mapDispatchToProps = {
  addCohortToApi
}

export default connect(mapStateToProps, mapDispatchToProps)(CohortEditor)