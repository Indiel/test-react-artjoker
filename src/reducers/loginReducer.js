const initialState = {
  isSignIn: false,
  isRegistration: true,
  isUsersLoading: false,
  enteredUser: [],
  errorMassage: '',
  isShowChangeForm: false,
  isError: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_ERROR':
      return {
        ...state,
        isError: action.payload,
      };

    case 'IS_USERS_LOADING':
      return {
        ...state,
        isUsersLoading: action.payload,
        isError: false,
      };

    case 'SIGN_IN':
      if (action.payload) {
        return {
          ...state,
          isSignIn: true,
          enteredUser: action.payload,
          errorMassage: '',
          isError: false,
        };
      }
      return {
        ...state,
        isSignIn: false,
        errorMassage: 'Неправильный email или пароль.',
        isError: false,
      };

    case 'ADD_NEW_USER':
      if (action.payload.userExists) {
        return {
          ...state,
          isSignIn: false,
          errorMassage: 'Такой пользователь уже зарегистрирован.',
          isError: false,
        };
      }
      return {
        ...state,
        isSignIn: true,
        enteredUser: action.payload.newUser,
        errorMassage: '',
        isError: false,
      };

    case 'CHANGE_PROFILE':
      return {
        ...state,
        enteredUser: action.payload,
        isShowChangeForm: false,
      };

    case 'REGISTRATION':
      return {
        ...state,
        isRegistration: !state.isRegistration,
      };

    case 'SIGN_OUT':
      return {
        ...state,
        isSignIn: false,
        enteredUser: [],
      };

    case 'SHOW_CHANGE_FORM':
      return {
        ...state,
        isShowChangeForm: !state.isShowChangeForm,
      };

    default:
      return state;
  }
};

export default loginReducer;
