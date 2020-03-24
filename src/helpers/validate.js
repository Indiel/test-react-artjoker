export const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Введите email.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неправильный email-адрес.';
  }

  if (!values.password) {
    errors.password = 'Введите пароль.';
  } else if (values.password && values.password.length < 6) {
    errors.password = 'Пароль должен быть не меньше 6 символов.';
  }
  return errors;
};

export const validateEmail = (values) => {
  if (values && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
    return 'Неправильный email-адрес.';
  }
  return undefined;
};

export const validatePassword = (values) => {
  if (values && values.length < 6) {
    return 'Пароль должен быть не меньше 6 символов.';
  }
  return undefined;
};

export const validateAge = (values) => {
  if (values === undefined) {
    return undefined;
  }
  if (Number(values) < 10) {
    return 'Вы слишком юны.';
  }
  if (Number(values) > 99) {
    return 'Вы подозрительно стары.';
  }
  return undefined;
};

export const validatePhone = (values) => {
  if (values === undefined) {
    return undefined;
  }
  if (!/\+\d{12}/g.test(values)) {
    return 'Неправильный номер.';
  }
  return undefined;
};
