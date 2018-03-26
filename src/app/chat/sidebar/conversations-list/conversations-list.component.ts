import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../../../shared/users.service';
import { ConversationsService } from '../../../shared/conversations.service';
import { Conversation } from '../../../shared/conversation.model';

@Component({
  selector: 'app-conversations-list',
  templateUrl: './conversations-list.component.html',
  styleUrls: ['./conversations-list.component.scss']
})
export class ConversationsListComponent implements OnInit {

  @Input() conversations: Conversation[] = [];

  constructor(private conversationsService: ConversationsService) { }

  ngOnInit() {
    // this.conversationsService.getConversations()
    //     .subscribe(conversations => {
    //         return this.conversations = conversations;
    //     });
  }
}
