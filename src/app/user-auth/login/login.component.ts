import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../shared/users.service';
import { User } from '../../shared/user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    signinForm: FormGroup;
    errorMessage: string;

    constructor(private usersService: UsersService,
                private router: Router) {
    }

    ngOnInit() {
        this.signinForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });

    }

    onSubmit() {
        const user = new User(
            this.signinForm.value.email,
            this.signinForm.value.password
        );
        this.usersService.signIn(user).subscribe(
            (data: any) => {
                const date = new Date();
                date.setTime(date.getTime() + (2 * 60 * 60 * 1000));
                const expires = '; expires=' + date.toUTCString();
                document.cookie = '_token=' + data.token + expires + '; path=/';
                document.cookie = '_userId=' + data.userId + expires + '; path=/';
                // localStorage.setItem('token', data.token);
                // localStorage.setItem('userId', data.userId);
                this.router.navigate(['/conversations']);
            },
            (err) => {
                this.errorMessage = err.error.error.message;
                setTimeout(() => {
                   this.errorMessage = '';
                }, 3000);
            }
        );
    }

}
