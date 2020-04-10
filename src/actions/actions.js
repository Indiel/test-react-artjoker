import { searchUser, addUser, changeUser } from '../services/users-service';

export const singOut = () => { return { type: 'SIGN_OUT' }; };
export const registration = () => { return { type: 'REGISTRATION' }; };
export const showChangeForm = () => { return { type: 'SHOW_CHANGE_FORM' }; };

export const fetchUsersSuccess = (result) => { return { type: 'FETCH_USERS_SUCCESS', payload: result }; };
export const fetchUsersError = (err) => { return { type: 'FETCH_USERS_ERROR', payload: err }; };

export const isLoading = (bool) => { return { type: 'IS_LOADING', payload: bool }; };

export const fetchNewsSuccess = (result) => { return { type: 'FETCH_NEWS_SUCCESS', payload: result }; };
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

export const fetchNews = (urlApi) => {
  return (dispatch) => {
    dispatch(isLoading(true));

    fetch(urlApi)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Что-то пошло не так:( Ошибка ${response.status}`);
        }

        dispatch(isLoading(false));

        const result = response.json();
        return result;
      })
      .then((result) => { return dispatch(fetchNewsSuccess(result)); })
      .catch((err) => { return dispatch(fetchNewsError(err)); });
  };
};
