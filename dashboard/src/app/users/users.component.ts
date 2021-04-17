import { Component, HostListener, ViewChild } from '@angular/core';
import { User } from 'models/user';
import { UsersService } from '../services/users2.service';
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
  url=environment.EditUserUrl

  users = [];  
  li:any;

  constructor(private usersService : UsersService, private current:CurrentUserService,
              private currentUserService: CurrentUserService,private http : HttpClient){}

  ngOnInit() {
    
    this.http.get(this.UserUrl)
    .subscribe(Response => {
      this.li= Response;  
      this.users=this.li.users
    });  

  }

    userRole:String

    onClickEdit(user: User):void{
      this.current.changeCurrentUser(user);
      if(this.userRole!==user.role){
        user.role=this.userRole
      } 
      this.http.put(this.url+user._id,user).subscribe(() => status = 'Edit successful');
    }
    
    onDeleteClick(user: User):void{
      const url = `${environment.DeleteUserUrl}${user._id}`
      console.log(url);
      
      this.http.delete(url).subscribe(() => status = 'Delete successful');
      window.location.reload();
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
