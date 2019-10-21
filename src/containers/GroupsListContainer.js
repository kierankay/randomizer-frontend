import { connect } from "react-redux";
import GroupList from '../components/GroupsList';
import { getCohortsFromApi } from '../actionCreators';

function mapStateToProps(state) {
  return {
    currentCohort: state.currentCohort,
    cohorts: state.cohorts
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);