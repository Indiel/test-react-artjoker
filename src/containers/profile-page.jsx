import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeProfile } from '../actions/actions';

import Profile from '../components/profile/profile';

const ProfilePage = ({ isSignIn, enteredUser, submitChangeProfile }) => {
  const submit = (values) => {
    submitChangeProfile({
      newData: values,
      oldEmail: enteredUser.email,
      oldPassword: enteredUser.password,
    });
  };

  if (isSignIn) {
    return (
      <div className="profile-page">
        <Profile onSubmit={submit} />
      </div>
    );
  }
  return <Redirect to="/authorization" />;
};

const mapStateToProps = (state) => {
  return {
    isSignIn: state.login.isSignIn,
    isShowChangeForm: state.login.isShowChangeForm,
    enteredUser: state.login.enteredUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { submitChangeProfile: (values) => { dispatch(changeProfile(values)); } };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
