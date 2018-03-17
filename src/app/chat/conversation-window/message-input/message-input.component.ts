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
    }

    ngOnInit() {
        this.loggedUser = this.usersService.loggedUser;
        // this.activeConversation = this.conversation;
    }

    onMessageSent() {
        this.conversationsService.sendMessage({
            authorId: this.loggedUser.id,
            authorFirstName: this.loggedUser.firstName,
            authorLastName: this.loggedUser.lastName,
            content: this.newMessage,
            date: new Date(),
            status: 'read',
        }, this.activeConversation._id).subscribe(
            (data) => {
                console.log(data); // TODO: check why data is undefined
                this.newMessage = '';
            }
        );
    }

}
