import { User } from './user.model';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService implements OnInit {
  users: User[];
  loggedUser: User;

  constructor(private http: HttpClient) {
      /*this.loggedUser = {
          id: '5a92f35ea44aeac53ecdae3f',
          name : 'Groniu',
          firstName: 'Bartosz',
          lastName: 'Gronkiewicz',
          email: 'pasiak5@gmail.com',
          conversationsIds: ['5a92ea201b7e4363a8d55474']
      };*/

      this.loggedUser = {
          id: '5a92f375a44aeac53ecdae40',
          name : 'natalia.dudkiewicz',
          firstName: 'Natalia',
          lastName: 'Dudkiewicz',
          email: 'blackberry771@wp.pl',
          conversationsIds: ['5a92ea201b7e4363a8d55474']
      };
  }

  ngOnInit() {
  }

  getUsers() {
    return this.http.get('/api/users').map((response: any) => response.json());
  }

  getUser(id) {
    return this.http.get<User>('/api/users/' + id).map(
        (response: any) => {
            return response;
        }
    );
  }
}
