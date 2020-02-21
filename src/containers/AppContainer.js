import { connect } from 'react-redux';
import { logUserIntoApi, updateUserFromToken, logUserOut } from '../store/actionCreators';
import App from '../components/App';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {
  logUserIntoApi,
  updateUserFromToken,
  logUserOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
