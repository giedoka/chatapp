import { Component, Input, OnInit } from '@angular/core';
import { Conversation } from '../../../shared/conversation.model';
import { ConversationsService } from '../../../shared/conversations.service';
import { UsersService } from '../../../shared/users.service';
import { User } from '../../../shared/user.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

    // activeConversation: Conversation;
    newMessage: string;
    loggedUser: User;
    @Input() activeConversation: Conversation;

    constructor(
        private conversationsService: ConversationsService,
        private usersService: UsersService,
        private route: ActivatedRoute
    ) {
        this.usersService.getLoggedUser().subscribe(
            (loggedUser) => {
                this.loggedUser = loggedUser;
            }
        );
    }

    ngOnInit() {}

    onMessageSent() {
        if (this.newMessage.trim() !== '') {
            this.conversationsService.sendMessage({
                authorId: this.loggedUser._id,
                authorFirstName: this.loggedUser.firstName,
                authorLastName: this.loggedUser.lastName,
                content: this.newMessage,
                date: new Date(),
                status: 'read',
                conversationId: this.activeConversation._id
            }, this.activeConversation._id).subscribe(
                (data) => {
                    // console.log(data); // TODO: check why data is undefined
                    this.newMessage = '';
                }
            );
        }
    }

}
