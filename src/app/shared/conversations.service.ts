import { EventEmitter, Injectable } from '@angular/core';
import { Conversation } from './conversation.model';
import { UsersService } from './users.service';
import { Http } from '@angular/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';

@Injectable()
export class ConversationsService {
  conversations: Conversation[];
  selectedConversation = new EventEmitter<Conversation>();

  constructor(
      private usersService: UsersService,
      private http: Http) {}

  getConversations() {
    return this.http.get('/api/conversations').map((response: any) => response.json());
  }
  getSingleConversation(id) {
    return this.http.get('/api/conversations/' + id).map((response: any) => response.json());
  }
  getConversationUser(id) {
    return this.http.get('/api/users/' + id).map((response: any) => response.json());
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
