import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { singIn, addNewUser, changeProfile } from '../actions/actions';

import Profile from '../components/profile/profile';

const ProfilePage = ({ isSingIn, enteredUser, submitChangeProfile }) => {
  const submit = (values) => {
    submitChangeProfile({ newData: values, oldEmail: enteredUser.email });
  };

  if (isSingIn) {
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
    isShowChangeForm: state.login.isShowChangeForm,
    enteredUser: state.login.enteredUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    singIn: (values) => { dispatch(singIn(values)); },
    addNewUser: (values) => { dispatch(addNewUser(values)); },
    submitChangeProfile: (values) => { dispatch(changeProfile(values)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
