import { Component, Input, OnInit } from '@angular/core';
import { Conversation } from '../../../shared/conversation.model';
import { UsersService } from '../../../shared/users.service';
import { ConversationsService } from '../../../shared/conversations.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/user.model';

@Component({
    selector: 'app-active-conversation',
    templateUrl: './active-conversation.component.html',
    styleUrls: ['./active-conversation.component.scss']
})
export class ActiveConversationComponent implements OnInit {

    /*activeConversation: Conversation;
    conversationUsers: User[] = [];*/
    loggedUserId: string;
    receiver: User;

    @Input() conversation: Conversation;

    constructor(private usersService: UsersService, private conversationsService: ConversationsService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.loggedUserId = this.usersService.loggedUser.id;
        for (let i = 0; this.conversation.usersIds.length; i++) {
            if (this.conversation.usersIds[i] !== this.loggedUserId) {
                this.conversationsService.getConversationUser(this.conversation.usersIds[i]).subscribe(
                    (user) => {
                        this.receiver = user;
                    }
                );
                break;
            }
        }
    }

}
