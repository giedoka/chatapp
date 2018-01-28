import { Component, Input, OnInit } from '@angular/core';
import { Conversation } from '../../shared/conversation.model';
import { ConversationsService } from '../../shared/conversations.service';
import { UsersService } from '../../shared/users.service';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

    @Input() activeConversation: Conversation;
    newMessage: string;

    constructor(
        private conversationsService: ConversationsService,
        private usersService: UsersService
    ) {
    }

    ngOnInit() {
    }

    onMessageSent() {
        const date = new Date();
        for (const key in this.conversationsService.conversations) {
            if (this.conversationsService.conversations.hasOwnProperty(key)) {
                if (this.conversationsService.conversations[key]['id'] === this.activeConversation.id) {
                    console.log(this.conversationsService.conversations[key]);
                    this.conversationsService.conversations[key].messages.push({
                        id: 99,
                        authorName: this.usersService.loggedUser.name,
                        authorId: this.usersService.loggedUser.id,
                        content: this.newMessage,
                        date: date,
                        read: false
                    });
                }
            }
        }
        this.newMessage = '';
    }

}
