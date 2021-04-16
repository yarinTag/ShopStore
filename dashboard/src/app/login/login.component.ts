import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service'

import {emailValidation, passwordValidation} from '../../config/form.validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UsersService: UsersService, private router:Router) {

  }

  currentUser = { userName: '' };
  errorMessage="";
  showCart=false;
  
  @Input() userObj = {
    userEmail: '', userPassword: ''
  };


  ngOnInit(): void {
    if (this.UsersService.loggedIn()){
      this.router.navigate(['pages/dashboard']);
    }
    this.UsersService.username.subscribe(user=>{
      this.currentUser.userName=user;
    })
    this.UsersService.loginError.subscribe(error=>{
      this.errorMessage=error;
    })
  }


  signIn() {
    const emailV = emailValidation(this.userObj.userEmail);
    if(!emailV.successful){
      this.errorMessage = emailV.message;
      return;
    }
    const passwordV=passwordValidation(this.userObj.userPassword);
    if(!passwordV.successful){
      this.errorMessage=passwordV.message;
      return;
    }
    this.UsersService.signIn(this.userObj.userEmail,this.userObj.userPassword);
  }

  logoutUser() {
    this.UsersService.logoutUser();
  }
  loggedIn() {
    return this.UsersService.loggedIn();
  }

  


}