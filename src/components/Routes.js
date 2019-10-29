import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginFormContainer from '../containers/LoginFormContainer';
import AdminConsoleContainer from '../containers/AdminConsoleContainer';
import GroupsListContainer from '../containers/GroupsListContainer';
import SignUpFormContainer from '../containers/SignUpFormContainer';

class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/login' render={(rtProps) => <LoginFormContainer {...rtProps} updateUser={this.props.updateUser} />} />
          {this.props.loggedIn ?
            <Route exact path='/' render={(rtProps) => <GroupsListContainer {...rtProps} />} /> : null
          }
          {this.props.loggedIn ?
            <Route exact path='/admin' render={(rtProps) => <AdminConsoleContainer {...rtProps} />} /> : null
          }
          <Route exact path='/sign-up' render={(rtProps) => <SignUpFormContainer {...rtProps} />} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default Routes;