import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    constructor(
        private usersService: UsersService,
        private route: Router
    ) { }

    ngOnInit() {
    }

    onLogout() {
        this.usersService.logout();
        this.route.navigate(['/auth']);
    }

}
