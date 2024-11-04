import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../models/login';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit{
  public login: LoginModel;
confirmPass : any;
  constructor() {
    this.login = new LoginModel();
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    // Your submission logic here
    console.log(this.login)
  }
}
