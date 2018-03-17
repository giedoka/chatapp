import { EventEmitter, Injectable } from '@angular/core';
import { Conversation } from './conversation.model';
import { UsersService } from './users.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Message } from './message.model';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';

@Injectable()
export class ConversationsService {
  private conversations: Conversation[];
  private conversation: Conversation;
  selectedConversation = new EventEmitter<Conversation>();

  constructor(
      private usersService: UsersService,
      private http: HttpClient) {}

  getConversations() {
    return this.http.get<Conversation[]>('/api/conversations')
        .map((response) => {
            this.conversations = response;
            return this.conversations;
        }
    );
  }
  getSingleConversation(id) {
      return this.http.get<Conversation>('/api/conversations/' + id)
          .map((response) => {
              this.conversation = response;
              return this.conversation;
          })
          .catch((error: Response) => Observable.throw(error.json()));
  }
  getConversationUser(id) {
    return this.http.get<User>('/api/users/' + id);
  }
  sendMessage(message: Message, conversationId: string) {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.patch<Message>(
          '/api/conversations/' + conversationId + '/send-message', JSON.stringify(message), { headers: headers }).map(
          (response) => {
              this.conversation.messages.push(message);
              console.log(message);
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
