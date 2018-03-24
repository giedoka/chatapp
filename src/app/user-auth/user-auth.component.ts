import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-auth',
    templateUrl: './user-auth.component.html',
    styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {

    constructor(private usersService: UsersService,
                private route: Router) {
    }

    ngOnInit() {
        if (this.usersService.isLoggedIn()) {
            this.route.navigate(['/conversations']);
        }
    }

}
