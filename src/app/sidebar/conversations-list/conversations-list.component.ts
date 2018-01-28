import { Component, OnInit } from '@angular/core';
import { ConversationsService } from '../../shared/conversations.service';

@Component({
  selector: 'app-conversations-list',
  templateUrl: './conversations-list.component.html',
  styleUrls: ['./conversations-list.component.scss']
})
export class ConversationsListComponent implements OnInit {

  conversations = [];

  constructor(private conversationsService: ConversationsService) { }

  ngOnInit() {
    this.conversations = this.conversationsService.conversations;
  }

}
