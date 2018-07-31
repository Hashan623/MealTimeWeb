import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms'
import { UserService } from '../shared/services/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    user: any = {};

    constructor(private userService: UserService) {}

    ngOnInit() {}

    onSubmit(form: NgForm) {
        console.log(form.value);
        this.userService.postUser(form.value)
        .subscribe(data => {
            console.log("Successsss!");
        })
      }
}
