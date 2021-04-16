import { Component } from '@angular/core';
import { User } from 'models/user';
import { UsersService } from '../services/users.service';
import { CurrentUserService } from '../services/current-user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

@Injectable()
export class UsersComponent {
 
  UserUrl= environment.UserUrl;

  users : User[] = [];  
  li:any;

  constructor(private usersService : UsersService, 
              private currentUserService: CurrentUserService,private http : HttpClient){}

  ngOnInit() {
    console.log(this.UserUrl);
    
    this.http.get(this.UserUrl)
    .subscribe(Response => {
      this.li=Response;        
      this.users=this.li
    });  }

  load(){
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  
  onClick(user : User){
    this.currentUserService.changeCurrentUser(user);
  }

  handlePanel(action : string){
    this.load();
  }
}
