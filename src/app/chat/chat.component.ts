import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private usersService: UsersService,
              private route: Router) { }

  ngOnInit() {
      if (this.usersService.isLoggedIn()) {
          this.route.navigate(['/conversations']);
      } else {
          this.route.navigate(['/auth/login']);
      }
  }

}
