import { EventEmitter, Injectable } from '@angular/core';
import { Conversation } from './conversation.model';
import { UsersService } from './users.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Message } from './message.model';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import * as io from 'socket.io-client';

@Injectable()
export class ConversationsService {
    private conversations: Conversation[];
    private conversation: Conversation;
    selectedConversation = new EventEmitter<Conversation>();
    socket: SocketIOClient.Socket;

    constructor(private usersService: UsersService,
                private http: HttpClient) {
        this.socket = io();
        this.socket.on('new message', (data) => {
            this.conversation.messages.push(data);
        });
    }

    getConversations() {
        // const token = localStorage.getItem('token') ? `?token=${localStorage.getItem('token')}` : '';
        const token = `?${decodeURIComponent(document.cookie)
            .split(';')
            .filter((value) => (value.indexOf('_token=') > -1))}`;
        return this.http.get<Conversation[]>(`/api/conversations${token.replace('_token', 'token')}`)
            .map((response) => {
                    this.conversations = response;
                    return this.conversations;
                }
            );
    }

    getSingleConversation(id) {
        // const token = localStorage.getItem('token') ? `?token=${localStorage.getItem('token')}` : '';
        const token = `?${decodeURIComponent(document.cookie)
            .split(';')
            .filter((value) => (value.indexOf('_token=') > -1))}`;
        this.socket.emit('conversation', id);
        return this.http.get<Conversation>(`/api/conversations/${id}${token.replace('_token', 'token')}`)
            .map(response => this.conversation = response)
            .catch((error: Response) => Observable.throw(error));
    }

    createConversations(receiverId) {
        // const token = localStorage.getItem('token') ? `?token=${localStorage.getItem('token')}` : '';
        const token = `?${decodeURIComponent(document.cookie)
            .split(';')
            .filter((value) => (value.indexOf('_token=') > -1))}`;
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post<Conversation>(
            `/api/conversations/create-conversation${token.replace('_token', 'token')}`, {receiverId: receiverId}, {headers: headers}).map(response => response);
    }

    getConversationUser(id) {
        return this.http.get<User>('/api/users/' + id);
    }

    sendMessage(message: Message, conversationId: string) {
        // const token = localStorage.getItem('token') ? `?token=${localStorage.getItem('token')}` : '';
        const token = `?${decodeURIComponent(document.cookie)
            .split(';')
            .filter((value) => (value.indexOf('_token=') > -1))}`;
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        this.socket.emit('message', message);
        return this.http.patch<Message>(
            `/api/conversations/${conversationId}/send-message${token.replace('_token', 'token')}`, JSON.stringify(message), {headers: headers}).map(
            (response) => {
                // this.conversation.messages.push(message);
                // console.log(message);
            }
        );
    }

    sortByDate() {
        /*this.usersService.loggedUser.conversations = _.orderBy(
            this.usersService.loggedUser.conversations,
            function(e) {
              return e.messages[e.messages.length - 1].date;
              },
            ['desc']
        );*/
    }
}
