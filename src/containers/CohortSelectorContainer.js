import { connect } from "react-redux";
import CohortSelector from '../components/CohortSelector';
import { updateCurrentCohort, getCohortsFromApi, addCohortToApi } from '../actionCreators';

function mapStateToProps(state) {
  return {
    currentCohort: state.currentCohort,
    cohorts: state.cohorts
  }
}

const mapDispatchToProps = {
  updateCurrentCohort,
  getCohortsFromApi,
  addCohortToApi
}

export default connect(mapStateToProps, mapDispatchToProps)(CohortSelector);