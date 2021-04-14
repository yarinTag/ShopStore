import { Component } from '@angular/core';
import { User } from 'models/user';
import { UsersService } from '../services/users.service';
import { CurrentUserService } from '../services/current-user.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

@Injectable()
export class UsersComponent {
 

  users : User[] = [];  

  constructor(private usersService : UsersService, 
              private currentUserService: CurrentUserService){}

  ngOnInit() {
    this.load();
  }

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
