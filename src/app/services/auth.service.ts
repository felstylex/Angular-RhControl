import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  TOKEN = "token";
  isAuthenticated: boolean = false;

  constructor( private route: Router) { 
    this.loadToken();
  }

  private loadToken() {
    const token = localStorage.getItem(this.TOKEN);
    if(token) {
      this.isAuthenticated = true;
    };
  }

  login(token: string) {
    if (token) {
      localStorage.setItem(this.TOKEN, "token");
      this.isAuthenticated = true;
    };
  } 

  logout() {
    localStorage.removeItem(this.TOKEN);
    this.isAuthenticated = false;
  }

  isLogged() {
    return this.isAuthenticated;
  }
}
