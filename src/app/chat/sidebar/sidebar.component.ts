import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import { Router } from '@angular/router';
import { User } from '../../shared/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConversationsService } from '../../shared/conversations.service';
import { Conversation } from '../../shared/conversation.model';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    showAddConversationForm: Boolean = false;
    users: User[] = [];
    createConversationForm: FormGroup;
    receiverId = '';
    conversations: Conversation[] = [];
    loggedUser: User;

    constructor(
        private usersService: UsersService,
        private conversationsService: ConversationsService,
        private route: Router
    ) { }

    ngOnInit() {
        // this.createConversationForm = new FormGroup({
        //     receiverId: new FormControl(null, Validators.required)
        // });
        this.conversationsService.getConversations()
            .subscribe(conversations => {
                return this.conversations = conversations;
            });
        this.usersService.getLoggedUser().subscribe((user) => {
            this.loggedUser = user;
        });
    }

    onLogout() {
        this.usersService.logout();
        this.route.navigate(['/auth']);
    }

    findUsers(e) {
        if (e.target.value.length > 2) {
            this.usersService.getUsersByQuery(e.target.value).subscribe(
                (response: any) => {
                    this.usersService.getLoggedUser().subscribe(
                        (user: User) => {
                            this.users = response.filter((usr: User) => usr._id !== user._id);
                        }
                    );
                }
            );
        } else {
            this.users = [];
        }
    }

    receiverIdSelect(id) {
        // this.createConversationForm.patchValue({receiverId: id});
    }

    onAddConversation(e) {
        let conversationId = null;
        console.log(e);
        this.receiverId = e.target.dataset.receiverId;
        for (let i = 0; i < this.conversations.length; i++) {
            if (this.conversations[i].usersIds.indexOf(this.receiverId) > -1) {
                conversationId = this.conversations[i]._id;
                break;
            }
        }
        if (!conversationId) {
            this.conversationsService.createConversations(this.receiverId).subscribe(
                (response) => {
                    this.usersService.addConversation(response['obj']._id, this.receiverId).subscribe(
                        (res) => {
                            console.log(res);
                            this.conversationsService.getConversations()
                                .subscribe(conversations => {
                                    return this.conversations = conversations;
                                });
                            this.route.navigate(['/conversations', response['obj']._id]);
                        }
                    );
                }
            );
        } else {
            this.route.navigate(['/conversations', conversationId]);
        }
        this.users = [];
    }

}
