import { connect } from "react-redux";
import { logUserIntoApi } from '../store/actionCreators';
import LoginForm from '../components/screens/LoginForm';

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logUserIntoApi
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)