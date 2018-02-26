import { Http } from '@angular/http';
import { User } from './user.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class UsersService implements OnInit {
  users: User[];
  loggedUser: User;

  constructor(private http: Http) {
      this.loggedUser = {
          id: '5a92f35ea44aeac53ecdae3f',
          name : 'Groniu',
          firstName: 'Bartosz',
          lastName: 'Gronkiewicz',
          email: 'pasiak5@gmail.com',
          conversationsIds: ['5a92ea201b7e4363a8d55474']
      };
  }

  ngOnInit() {
  }

  getUsers() {
    return this.http.get('/api/users').map((response: any) => response.json());
  }
}
