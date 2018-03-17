import { User } from './user.model';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Message } from './message.model';

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
            name: 'natalia.dudkiewicz',
            firstName: 'Natalia',
            lastName: 'Dudkiewicz',
            email: 'blackberry771@wp.pl',
            password: '12321',
            conversationsIds: ['5a92ea201b7e4363a8d55474'],
            id: '5a92f375a44aeac53ecdae40',
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

    signUp(user: User) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post<User>('/api/users', JSON.stringify(user), {headers: headers})
            .map(response => response);
        // .catch((error: Response) => Observable.throw(error));
    }

    signIn(user: User) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post<User>('/api/users/signin', JSON.stringify(user), {headers: headers})
            .map(response => response);
        // .catch((error: Response) => Observable.throw(error));
    }

    logout() {
        localStorage.clear();
    }
}
