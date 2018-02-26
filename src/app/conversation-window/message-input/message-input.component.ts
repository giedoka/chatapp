import { Component, Input, OnInit } from '@angular/core';
import { Conversation } from '../../shared/conversation.model';
import { ConversationsService } from '../../shared/conversations.service';
import { UsersService } from '../../shared/users.service';
import { User } from '../../shared/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

    activeConversation: Conversation;
    newMessage: string;
    loggedUser: User;

    constructor(
        private conversationsService: ConversationsService,
        private usersService: UsersService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.loggedUser = this.usersService.loggedUser;
        const id = this.route.snapshot.params['id'];
        console.log(this.route);
        this.conversationsService.getSingleConversation(id).subscribe(
            (conversation) => {
                this.activeConversation = conversation;
            }
        );
    }

    onMessageSent() {
        const date = new Date();
        const id = this.route.snapshot.params['id'];
        this.conversationsService.getSingleConversation(id).subscribe(
            (conversation) => {
                this.activeConversation = conversation;
                this.activeConversation.messages.push({
                    authorId: this.usersService.loggedUser.id,
                    content: this.newMessage,
                    date: date,
                    status: 'read',
                });
                this.newMessage = '';
            }
        );
    }

}
