import { Component, Input, OnInit } from '@angular/core';
import { Conversation } from '../../../shared/conversation.model';
import { UsersService } from '../../../shared/users.service';
import { ConversationsService } from '../../../shared/conversations.service';
import { ActivatedRoute, Params } from '@angular/router';
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
        this.usersService.getLoggedUser().subscribe(
            (user: any) => {
                this.loggedUserId = user._id;
                const receiverId = this.conversation.usersIds.filter((value) => value !== this.loggedUserId);
                this.usersService.getUser(receiverId[0]).subscribe(
                    (receiver) => {
                        this.receiver = receiver;
                    }
                );
            }
        );

        this.route.params.subscribe(
            (param: Params) => {
                this.usersService.getLoggedUser().subscribe(
                    (user: any) => {
                        this.loggedUserId = user._id;
                        const receiverId = this.conversation.usersIds.filter((value) => value !== this.loggedUserId);
                        this.usersService.getUser(receiverId[0]).subscribe(
                            (receiver) => {
                                this.receiver = receiver;
                            }
                        );
                    }
                );
            }
        );
    }

}
