import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GreetingPage from './GreetingPage';
import ForgotPasswordForm from './screens/ForgotPasswordForm';
import ResetPasswordForm from './screens/ResetPasswordForm';
import LoginFormContainer from '../containers/LoginFormContainer';
import AdminConsoleContainer from '../containers/AdminConsoleContainer';
import GroupsListContainer from '../containers/GroupsListContainer';
import SignUpFormContainer from '../containers/SignUpFormContainer';

const Routes = (props) => {
  const { loggedIn, updateUser } = props;
  return (
    <>
      <Switch>
        <Route exact path="/login" render={(rtProps) => <LoginFormContainer {...rtProps} updateUser={updateUser} />} />
        {loggedIn
          ? <Route exact path="/" render={(rtProps) => <GroupsListContainer {...rtProps} />} />
          : <Route exact path="/" render={(rtProps) => <GreetingPage {...rtProps} />} />}
        {loggedIn
          ? <Route exact path="/admin" render={(rtProps) => <AdminConsoleContainer {...rtProps} />} />
          : null}
        <Route exact path="/sign-up" render={(rtProps) => <SignUpFormContainer {...rtProps} />} />
        <Route exact path="/forgot-password" render={(rtProps) => <ForgotPasswordForm {...rtProps} />} />
        <Route exact path="/reset-password/:token" render={(rtProps) => <ResetPasswordForm {...rtProps} />} />
        <Route path="/" render={(rtProps) => <GreetingPage {...rtProps} />} />
      </Switch>
    </>
  );
};

export default Routes;
