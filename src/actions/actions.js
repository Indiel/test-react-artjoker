const fetchUsers = (users) => { return { type: 'FETCH_USERS_SUCCESS', payload: users }; };

const singIn = (values) => { return { type: 'SIGN_IN', payload: values }; };
const singOut = () => { return { type: 'SIGN_OUT' }; };

const registration = () => { return { type: 'REGISTRATION' }; };
const addNewUser = (values) => { return { type: 'ADD_NEW_USER', payload: values }; };

const showChangeForm = () => { return { type: 'SHOW_CHANGE_FORM' }; };
const changeProfile = (values) => { return { type: 'CHANGE_PROFILE', payload: values }; };

export { fetchUsers, singIn, singOut, registration, addNewUser, showChangeForm, changeProfile };
