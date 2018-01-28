import { Component, Input, OnInit } from '@angular/core';
import { ConversationsService } from '../../../shared/conversations.service';
import { Conversation } from '../../../shared/conversation.model';
import { Message } from '../../../shared/message.model';

@Component({
  selector: 'app-single-conversation',
  templateUrl: './single-conversation.component.html',
  styleUrls: ['./single-conversation.component.scss']
})
export class SingleConversationComponent implements OnInit {

  @Input() conversation: Conversation;
  lastMessage: Message = null;

  constructor(private conversationService: ConversationsService) { }

  ngOnInit() {
    if (this.conversation.messages !== null) {
      this.lastMessage = this.conversation.messages[this.conversation.messages.length - 1];
    }
  }

  onSelectConversation() {
    console.log(this.conversation);
    this.conversationService.selectedConversation.emit(this.conversation);
  }

}
