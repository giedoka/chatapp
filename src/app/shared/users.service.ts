import { User } from './user.model';

export class UsersService {
  users: User[];
  loggedUser: User;

  constructor() {
    this.users = [
      {
        id: 1,
        name: 'Piotr Uzarski',
        conversationsIds: []
      },
      {
        id: 2,
        name: 'Marcin Czerwiński',
        conversationsIds: []
      },
      {
        id: 3,
        name: 'Łukasz Witkowski',
        conversationsIds: []
      },
      {
        id: 4,
        name: 'Natalia Dudkiewicz',
        conversationsIds: []
      },
      {
        id: 5,
        name: 'Bartosz Gronkiewicz',
        conversationsIds: [1, 2, 3, 4]
      }
    ];
    this.loggedUser = {
      id: 5,
      name: 'Bartosz Gronkiewicz',
      conversationsIds: [1, 2, 3, 4]
    };
  }

}
