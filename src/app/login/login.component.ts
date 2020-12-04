import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  username = '';

  constructor(private login: LoginService) {}

  ngOnInit(): void {
    this.username = this.login.username;
  }

  connect(): void {
    this.login.logIn(this.username);
  }

  disconnect(): void {
    this.login.logOut();
  }

  get isLoggedIn(): boolean {
    return this.login.isLoggedIn;
  }

  get loggedUser(): string {
    return this.login.username;
  }

}
