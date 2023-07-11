import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  user: IUser = {
    email: '',
    password: ''
  };

  constructor(
    private userService: UserService,
    private route: Router,
  ) {}

  login() {
    this.userService.login(this.user).subscribe(
      () => {
        alert("login");
        this.route.navigate(["/employee"]);
      }
    );
  }

  registerRoute() {
    this.route.navigate(["/register"]);
  }

}
