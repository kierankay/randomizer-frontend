import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginFormContainer from './containers/LoginFormContainer';
import AdminConsole from './components/AdminConsole';
import GroupsListContainer from './containers/GroupsListContainer';

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
            <Route exact path='/admin' render={(rtProps) => <AdminConsole {...rtProps} />} /> : null
          }
          {this.props.loggedIn ?
            <Route exact path='/admin' render={(rtProps) => <GroupsListContainer {...rtProps} />} /> : null
          }
        </Switch>
      </React.Fragment>
    )
  }
}

export default Routes;