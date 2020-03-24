import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { singIn, addNewUser } from '../actions/actions';

import Authorization from '../components/authorization/authorization';

const AuthorizationPage = ({ isSingIn, isRegistration, submitSingIn, submitAddNewUser }) => {
  const submit = (values) => {
    if (isRegistration) {
      submitSingIn(values);
    } else {
      submitAddNewUser(values);
    }
  };

  if (isSingIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="authorization-page">
      <Authorization onSubmit={submit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSingIn: state.login.isSingIn,
    isRegistration: state.login.isRegistration,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitSingIn: (values) => { dispatch(singIn(values)); },
    submitAddNewUser: (values) => { dispatch(addNewUser(values)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);
