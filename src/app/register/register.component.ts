import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {
  user: IUser = {
    name: '',
    email: '',
    password: ''
  }

  constructor(
    private userService: UserService,
    private route: Router
    
  ) {}

  register() {
    if(this.user.email.length < 5) {
      return alert("Preencha os dados corretamente");
    }

    if(this.user.name) {
      if (this.user.name.length < 5) return alert("Preencha os dados corretamente");
    }

    if(this.user.password.length < 5) {
      return alert("Preencha os dados corretamente");
    }

    this.userService.register(this.user).subscribe(
      () => {
        alert("Usuário cadastrado com sucesso");
        this.route.navigate(["login"]);
      }
    );
  }

}
