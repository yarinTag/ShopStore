import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {User} from '../../../models/user';
import Swal from 'sweetalert2';

import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 
  username= new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('UserName'))));
  userId= new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('UserId'))));
  errorMessage="";
  loginError=new BehaviorSubject<string>("");
  registerError=new BehaviorSubject<string>("");
  userOrders:any[];
  userPassword:String="";
  currentUser!: User;
  constructor(private http :HttpClient, private router:Router) {
    this.userOrders=[];
   }

  baseUrl= 'http://localHost:8000/api/users';

  signIn(email:String, password:String) {
    
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    this.http.post<User>(this.baseUrl+'/login',{
      email:email,
      password:password,
    }).subscribe((data:any)=>
    {
      console.log(data);
      if (data.data.user.role != 'admin'){
        this.router.navigate(['/auth/login']);
        return Swal.fire({
          title: 'error',
          icon: "error",
          text: 'User is not admin'
        })
      }
      localStorage.setItem('token',data.token);
      this.router.navigate(['/pages/dashboard']);
     
    },(error)=>{
      console.log(error);
      this.errorMessage=error.error.message;
      this.loginError.next(this.errorMessage);
      console.log(this.errorMessage);


    })
    
  }
  
  getAllUsers(){
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get<any>(this.baseUrl, {
      headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    });

  }

  deleteUser(User) {
    return this.http.delete(this.baseUrl + '/' + User._id,  {
      headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
  }


  logoutUser(){
    localStorage.removeItem("token");
   
    this.errorMessage="";
    this.loginError.next(this.errorMessage);
    this.router.navigate(['/auth/login']);

  }

  loggedIn(){
       return localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }

  getUserName(){
    return this.username.toString();
  }

}