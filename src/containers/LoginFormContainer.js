import { connect } from "react-redux";
import { logUserIntoApi} from '../actionCreators';
import LoginForm from '../components/LoginForm';

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logUserIntoApi
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)