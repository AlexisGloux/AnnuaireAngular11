import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username: string = null;

  logIn(username: string): void {
    this.username = username;
  }

  logOut(): void {
    this.username = null;
  }

  get isLoggedIn(): boolean {
    return null !== this.username;
  }
}
