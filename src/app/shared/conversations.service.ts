import { EventEmitter } from '@angular/core';
import { Conversation } from './conversation.model';

export class ConversationsService {
  conversations: Conversation[];

  selectedConversation = new EventEmitter<Conversation>();

  constructor() {
    this.conversations = [
      new Conversation(1, 'piekni koderzy i ikeowcy a także kodowcy', 'https://scontent-waw1-1.xx.fbcdn.net/v/t34.0-12/26794042_10213691360710090_1593931239_n.png?oh=485fa02289be0c7f40eeed610f1a8163&oe=5A6F0595', 1, 0, null),
      new Conversation(2, 'IT - Everyday normal crew', 'https://scontent-waw1-1.xx.fbcdn.net/v/t34.0-12/12286114_1140802275947762_1558203979_n.jpg?oh=d36d14904bdcf34fa8cccd9418a34e20&oe=5A6ED59F', 4, 2, [{id: 1, authorName: 'Kaszel', authorId: 1, content: 'Siema', day: '27/12/2017', time: '12:33', read: true}, {id: 2, authorName: 'Kosa w plecy?', authorId: 2, content: 'No elo', day: '27/12/2017', time: '12:34', read: false}]),
      new Conversation(3, 'Natalka', 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/p100x100/24131266_1444786205647732_8925233050924907354_n.jpg?oh=33d017c111576ba82a16db637ab9d44e&oe=5B1CB9E4', 1, 0, null),
      new Conversation(4, 'Piotr Uzarski', 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/p100x100/20431711_1708899489138035_1761281252258133360_n.jpg?oh=d7d25ca500e0c4ce55d7afdd0b54197a&oe=5ADDDC72', 1, 0, null),
    ];
  }

}
