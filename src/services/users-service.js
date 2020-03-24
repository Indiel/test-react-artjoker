const usersService = {
  users: [
    {
      email: 'harry@mail.com',
      password: '111111',
      name: 'Harry',
      lastName: 'Potter',
      phone: '111-111',
      age: '13',
      gender: 'm',
      hobbies: ['Quidditch', 'Adventures'],
    },
    {
      email: 'ron@mail.com',
      password: '222222',
      name: 'Ron',
      lastName: 'Weasley',
      phone: '222-222',
      age: '13',
      gender: 'm',
      hobbies: ['Eating', 'Walks'],
    },
    {
      email: 'hermione@mail.com',
      password: '333333',
      name: 'Hermione',
      lastName: 'Granger',
      phone: '333-333',
      age: '13',
      gender: 'w',
      hobbies: ['Learning', 'Reading'],
    },
  ],

  getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0) {
          reject(new Error('Нет связи с сервером. Попробуйте перезагрузить страницу.'));
        } else {
          resolve(this.users);
        }
      }, 700);
    });
  },

  searchUser: (object) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Нет связи с сервером. Попробуйте еще раз.'));
        } else {
          const result = this.users.filter((user) => {
            return (object.email === user.email && object.password === user.password) ? user : null;
          });
          resolve(result);
        }
      }, 700);
    });
  },
};

export default usersService;
