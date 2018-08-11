import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import { User } from '../../shared/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    errorMessage: string;

    constructor(private usersService: UsersService, private route: Router) {
    }

    ngOnInit() {
        this.registerForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });

    }

    onSubmit() {
        const user = new User(
            this.registerForm.value.email,
            this.registerForm.value.password,
            this.registerForm.value.name,
            this.registerForm.value.firstName,
            this.registerForm.value.lastName
        );
        this.usersService.signUp(user).subscribe(
            (data) => {
                this.route.navigate(['/auth', 'login']);
                this.registerForm.reset();
            },
            (err) => {
                console.log(err);
                this.errorMessage = err.error.error.message;
                setTimeout(() => {
                    this.errorMessage = '';
                }, 3000);
            }
        );
    }

}
