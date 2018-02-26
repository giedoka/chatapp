import { Component, OnInit } from '@angular/core';
import { Conversation } from '../../shared/conversation.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ConversationsService } from '../../shared/conversations.service';
import { User } from '../../shared/user.model';
import { UsersService } from '../../shared/users.service';

@Component({
    selector: 'app-active-conversation',
    templateUrl: './active-conversation.component.html',
    styleUrls: ['./active-conversation.component.scss']
})
export class ActiveConversationComponent implements OnInit {

    activeConversation: Conversation;
    conversationUsers: User[] = [];
    loggedUserId: string;

    constructor(private conversationsService: ConversationsService, private route: ActivatedRoute, private usersService: UsersService) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.loggedUserId = this.usersService.loggedUser.id;
        this.conversationsService.getSingleConversation(id).subscribe(
            (conversation) => {
                this.activeConversation = conversation;
                this.conversationsService.getConversationUser(this.activeConversation.usersIds).subscribe(
                    (user) => {
                        this.conversationUsers.push(user);
                    }
                );
            }
        );
        this.route.params.subscribe(
            (param: Params) => {
                this.conversationsService.getSingleConversation(param['id']).subscribe(
                    (conversation) => {
                        this.activeConversation = conversation;
                        this.conversationsService.getConversationUser(this.activeConversation.usersIds).subscribe(
                            (user) => {
                                this.conversationUsers.push(user);
                            }
                        );
                    }
                );
            }
        );
    }

}
