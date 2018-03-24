import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import { Router } from '@angular/router';
import { User } from '../../shared/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConversationsService } from '../../shared/conversations.service';

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

    constructor(
        private usersService: UsersService,
        private conversationsService: ConversationsService,
        private route: Router
    ) { }

    ngOnInit() {
        this.createConversationForm = new FormGroup({
            receiverId: new FormControl(null, Validators.required)
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
                    this.users = response;
                }
            );
        } else {
            this.users = [];
        }
    }

    receiverIdSelect(id) {
        this.createConversationForm.patchValue({receiverId: id});
    }

    onAddConversation() {
        this.conversationsService.createConversations(this.createConversationForm.value.receiverId).subscribe(
            (response) => {
                console.log(response);
                this.usersService.addConversation(response['obj']._id, this.createConversationForm.value.receiverId).subscribe(
                    (res) => {
                        console.log(res);
                    }
                );
            }
        );
    }

}
