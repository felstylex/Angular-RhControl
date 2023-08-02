import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = "https://java-rhcontrol-production.up.railway.app";
  TOKEN = "token";

  constructor(private http: HttpClient) { }

  register(user: IUser) {
    return this.http.post<IUser>(this.URL + '/register', user);
  }

  login(user: IUser) {
    return this.http.post<IUser>(this.URL + '/login', user).pipe(
      tap(() => {
        const token = "token";
        if(token) {
          localStorage.setItem(this.TOKEN, token);
        }
      })
    );
  }
}
