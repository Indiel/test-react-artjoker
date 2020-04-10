const urlApi = 'https://jsonplaceholder.typicode.com/users';
const newUsers = [];

async function getUsers() {
  const response = await fetch(urlApi);

  if (!response.ok) {
    throw new Error(`Что-то пошло не так:( Ошибка ${response.status}`);
  }

  const result = response.json();
  return result;
}

export function addUser(values) {
  newUsers.push({ ...values });
}

export async function searchUser(email, password, action) {
  const response = await getUsers();
  let result;
  let index;

  if (newUsers.length) {
    result = newUsers.find((user, i) => {
      index = i;
      if (action === 'addNewUser') {
        return (email === user.email);
      }
      return (email === user.email && password === user.password);
    });
  }
  if (!result) {
    result = response.find((user) => {
      if (email === user.email) {
        addUser({ ...user, password });
      }
      return (email === user.email);
    });
  }

  return { index, user: result };
}

export async function changeUser(values) {
  const response = await searchUser(values.oldEmail, values.oldPassword);

  const result = {
    ...response.user,
    ...values.newData,
  };

  if (response.index === undefined) {
    newUsers.push(result);
  } else {
    newUsers[response.index] = result;
  }

  return result;
}
