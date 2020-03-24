const initialState = {
  isSingIn: false,
  isRegistration: true,
  users: null,
  enteredUser: [],
  errorMassage: '',
  isShowChangeForm: false,
};

const loginReducer = (state = initialState, action) => {
  if (action.type === 'SIGN_IN') {
    const verifyUser = state.users.filter((user) => {
      return action.payload.email === user.email && action.payload.password === user.password;
    });
    if (verifyUser.length !== 0) {
      return {
        ...state,
        isSingIn: true,
        enteredUser: verifyUser[0],
        errorMassage: '',
      };
    }
    return {
      ...state,
      isSingIn: false,
      errorMassage: 'Неправильный email или пароль.',
    };
  }

  if (action.type === 'ADD_NEW_USER') {
    const existingUser = state.users.filter((user) => {
      return action.payload.email === user.email;
    });
    if (existingUser.length !== 0) {
      return {
        ...state,
        isSingIn: false,
        errorMassage: 'Такой пользователь уже зарегистрирован.',
      };
    }
    return {
      ...state,
      isSingIn: true,
      enteredUser: action.payload,
      users: [...state.users, action.payload],
      errorMassage: '',
    };
  }

  if (action.type === 'CHANGE_PROFILE') {
    let changeUserIndex;
    const changeUser = state.users.filter((user, index) => {
      changeUserIndex = index;
      return action.payload.oldEmail === user.email;
    });

    if (action.payload.newData.email) {
      changeUser[0].email = action.payload.newData.email;
    }
    if (action.payload.newData.password) {
      changeUser[0].password = action.payload.newData.password;
    }
    if (action.payload.newData.name) {
      changeUser[0].name = action.payload.newData.name;
    }
    if (action.payload.newData.lastName) {
      changeUser[0].lastName = action.payload.newData.lastName;
    }
    if (action.payload.newData.phone) {
      changeUser[0].phone = action.payload.newData.phone;
    }
    if (action.payload.newData.age) {
      changeUser[0].age = action.payload.newData.age;
    }
    if (action.payload.newData.gender) {
      changeUser[0].gender = action.payload.newData.gender;
    }
    if (action.payload.newData.hobbies) {
      changeUser[0].hobbies = action.payload.newData.hobbies;
    }

    return {
      ...state,
      enteredUser: changeUser[0],
      users: [
        ...state.users.slice(0, changeUserIndex),
        changeUser[0],
        ...state.users.slice(changeUserIndex + 1),
      ],
      isShowChangeForm: false,
    };
  }

  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
      };

    case 'REGISTRATION':
      return {
        ...state,
        isRegistration: !state.isRegistration,
      };

    case 'SIGN_OUT':
      return {
        ...state,
        isSingIn: false,
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
