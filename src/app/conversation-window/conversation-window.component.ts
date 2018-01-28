import { Component, Input, OnInit } from '@angular/core';
import { Conversation } from '../shared/conversation.model';

@Component({
  selector: 'app-conversation-window',
  templateUrl: './conversation-window.component.html',
  styleUrls: ['./conversation-window.component.scss']
})
export class ConversationWindowComponent implements OnInit {

  @Input() conversation: Conversation;

  constructor() { }

  ngOnInit() {
  }

}
