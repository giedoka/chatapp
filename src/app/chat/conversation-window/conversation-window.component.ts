import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import { Conversation } from '../../shared/conversation.model';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../shared/user.model';
import { ConversationsService } from '../../shared/conversations.service';

@Component({
  selector: 'app-conversation-window',
  templateUrl: './conversation-window.component.html',
  styleUrls: ['./conversation-window.component.scss']
})
export class ConversationWindowComponent implements OnInit {
    activeConversation: Conversation;
    conversationUsers: User[] = [];
    loggedUser: User;

    constructor(private conversationsService: ConversationsService, private route: ActivatedRoute, private usersService: UsersService) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.usersService.getLoggedUser().subscribe(
            (user: any) => {
                this.loggedUser = user;
            }
        );
        this.conversationsService.getSingleConversation(id).subscribe(
            (conversation) => {
                this.activeConversation = conversation;
                this.activeConversation.usersIds.forEach((element, index, array) => {
                    this.usersService.getUser(element).subscribe(
                        (user) => {
                            this.conversationUsers.push(user);
                        }
                    );
                });
            }
        );
        this.route.params.subscribe(
            (param: Params) => {
                this.conversationsService.getSingleConversation(param['id']).subscribe(
                    (conversation) => {
                        this.activeConversation = conversation;
                        this.activeConversation.usersIds.forEach((element, index, array) => {
                            this.usersService.getUser(element).subscribe(
                                (user) => {
                                    this.conversationUsers.push(user);
                                }
                            );
                        });
                    }
                );
            }
        );
    }

}
