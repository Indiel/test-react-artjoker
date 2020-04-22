import { searchUser, addUser, changeUser } from '../services/users-service';
import { getNewsList, getOneNews } from '../services/news-service';

// export const singOut = () => ({ type: 'SIGN_OUT' });
export const singOut = () => { return { type: 'SIGN_OUT' }; };
export const registration = () => { return { type: 'REGISTRATION' }; };
export const showChangeForm = () => { return { type: 'SHOW_CHANGE_FORM' }; };

export const fetchUsersSuccess = (result) => { return { type: 'FETCH_USERS_SUCCESS', payload: result }; };
export const fetchUsersError = (err) => { return { type: 'FETCH_USERS_ERROR', payload: err }; };

export const isNewsLoading = (bool) => { return { type: 'IS_NEWS_LOADING', payload: bool }; };
export const isOneNewsLoading = (bool) => { return { type: 'IS_ONE_NEWS_LOADING', payload: bool }; };
export const isUsersLoading = (bool) => { return { type: 'IS_USERS_LOADING', payload: bool }; };

export const fetchNewsSuccess = (result) => { return { type: 'FETCH_NEWS_SUCCESS', payload: result }; };
export const fetchOneNewsSuccess = (result) => { return { type: 'FETCH_ONE_NEWS_SUCCESS', payload: result }; };
export const fetchNewsError = (err) => { return { type: 'FETCH_NEWS_ERROR', payload: err }; };

export const signIn = (values) => {
  return (dispatch) => {
    searchUser(values.email, values.password)
      .then((result) => {
        return dispatch({ type: 'SIGN_IN', payload: result.user });
      })
      .catch((err) => { return dispatch(fetchUsersError(err)); });
  };
};

export const addNewUser = (values) => {
  return (dispatch) => {
    searchUser(values.email, values.password, 'addNewUser')
      .then((result) => {
        if (!result.user) {
          addUser(values);
        }
        return dispatch({ type: 'ADD_NEW_USER', payload: { userExists: result.user, newUser: values } });
      })
      .catch((err) => { return dispatch(fetchUsersError(err)); });
  };
};

export const changeProfile = (values) => {
  return (dispatch) => {
    changeUser(values)
      .then((result) => {
        return dispatch({ type: 'CHANGE_PROFILE', payload: result });
      });
  };
};

export const fetchNews = () => {
  return (dispatch) => {
    dispatch(isNewsLoading(true));

    getNewsList()
      .then((result) => {
        dispatch(isNewsLoading(false));
        return dispatch(fetchNewsSuccess(result));
      })
      .catch((err) => { return dispatch(fetchNewsError(err)); });
  };
};

export const searchOneNews = (date) => {
  return (dispatch) => {
    dispatch(isOneNewsLoading(true));

    getOneNews(date)
      .then((result) => {
        dispatch(isOneNewsLoading(false));
        return dispatch(fetchOneNewsSuccess(result));
      })
      .catch((err) => { return dispatch(fetchNewsError(err)); });
  };
};
