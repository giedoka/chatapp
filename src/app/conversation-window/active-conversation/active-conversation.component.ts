import { Component, Input, OnInit } from '@angular/core';
import { Conversation } from '../../shared/conversation.model';
import { User } from '../../shared/user.model';
import { UsersService } from '../../shared/users.service';

@Component({
    selector: 'app-active-conversation',
    templateUrl: './active-conversation.component.html',
    styleUrls: ['./active-conversation.component.scss']
})
export class ActiveConversationComponent implements OnInit {

    @Input() activeConversation: Conversation;
    // @Input() loggedUser: User;
    loggedUserId: number;

    constructor(private usersService: UsersService) { }

    ngOnInit() {
        this.loggedUserId = this.usersService.loggedUser.id;
    }

}
