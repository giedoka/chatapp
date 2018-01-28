import { Component, OnInit } from '@angular/core';
import { Conversation } from './shared/conversation.model';
import { ConversationsService } from './shared/conversations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedConversation: Conversation;

  constructor(private conversationsService: ConversationsService) {}

  ngOnInit() {
    this.conversationsService.selectedConversation.subscribe(
        (conversation: Conversation) => {
          this.selectedConversation = conversation;
        }
    );
  }
}
