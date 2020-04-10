import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, addNewUser } from '../actions/actions';

import Authorization from '../components/authorization/authorization';
import Error from '../components/error/error';

const AuthorizationPage = ({
  isSignIn,
  isRegistration,
  submitSignIn,
  submitAddNewUser,
  isError,
}) => {
  const submit = (values) => {
    if (isRegistration) {
      submitSignIn(values);
    } else {
      submitAddNewUser(values);
    }
  };

  if (isSignIn) {
    return <Redirect to="/" />;
  }

  const error = isError ? <Error error={String(isError)} /> : undefined;

  return (
    <div className="authorization-page">
      <Authorization onSubmit={submit} />
      { error }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignIn: state.login.isSignIn,
    isRegistration: state.login.isRegistration,
    isError: state.news.isError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitSignIn: (values) => { dispatch(signIn(values)); },
    submitAddNewUser: (values) => { dispatch(addNewUser(values)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);
