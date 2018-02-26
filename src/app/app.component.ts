import { Component, OnInit } from '@angular/core';
import { Conversation } from './shared/conversation.model';
import { ConversationsService } from './shared/conversations.service';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  constructor(
      private conversationsService: ConversationsService,
      private usersService: UsersService
  ) {}

  ngOnInit() {
    this.usersService.getUsers();
  }
}
