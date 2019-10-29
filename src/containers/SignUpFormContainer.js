import { connect } from "react-redux";
import { createUser} from '../store/actionCreators';
import SignUpForm from '../components/screens/SignUpForm';

function mapStateToProps(state) {
  return {
    
  }
}

const mapDispatchToProps = {
  createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)