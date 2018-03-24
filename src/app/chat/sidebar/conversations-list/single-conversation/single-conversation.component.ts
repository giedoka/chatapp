import { Component, Input, OnInit } from '@angular/core';
import { ConversationsService } from '../../../../shared/conversations.service';
import { Conversation } from '../../../../shared/conversation.model';
import { Message } from '../../../../shared/message.model';
import { User } from '../../../../shared/user.model';
import { UsersService } from '../../../../shared/users.service';

@Component({
    selector: 'app-single-conversation',
    templateUrl: './single-conversation.component.html',
    styleUrls: ['./single-conversation.component.scss']
})
export class SingleConversationComponent implements OnInit {

    @Input() conversation: Conversation;
    lastMessage: Message = null;
    receiver: User = null;
    conversationAvatarText: String = '';
    loggedUser: User;

    constructor(private conversationsService: ConversationsService,
                private usersService: UsersService) {
    }

    ngOnInit() {
        if (this.conversation.messages) {
            this.lastMessage = this.conversation.messages[this.conversation.messages.length - 1];
            this.usersService.getLoggedUser().subscribe(
                (user: any) => {
                    this.loggedUser = user;
                    for (let i = 0; i < this.conversation.usersIds.length; i++) {
                        if (this.conversation.usersIds[i] !== this.loggedUser._id) {
                            this.usersService.getUser(this.conversation.usersIds[i]).subscribe(
                                receiver => {
                                    this.receiver = receiver;
                                    this.conversationAvatarText = receiver.firstName.split('').splice(0, 1);
                                    this.conversationAvatarText += receiver.lastName.split('').splice(0, 1);
                                }
                            );
                        }
                    }
                }
            );
        }
    }

    isImagePathUndefined(val) {
        return typeof val === 'undefined';
    }

    // onSelectConversation(id) {
    //   console.log(this.conversation);
    //   // this.conversationsService.getSingleConversation(id).subscribe();
    //   this.conversationsService.selectedConversation.emit(this.conversation);
    // }

}
