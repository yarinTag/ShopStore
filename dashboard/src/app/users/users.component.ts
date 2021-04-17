import { Component } from '@angular/core';
import { User } from 'models/user';
import { UsersService } from '../services/users2.service';
import { CurrentUserService } from '../services/current-user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

@Injectable()
export class UsersComponent {

  UserUrl = environment.UserUrl;
  //route : any
  users = [];
  li: any;

  constructor(private usersService: UsersService, private route: ActivatedRoute,
    private currentUserService: CurrentUserService, private http: HttpClient) { }

  ngOnInit() {
    // let token = this.route.snapshot.queryParams["token"]
    // //  console.log(param1)
    // console.log(token)
    let token = localStorage.getItem("token")
    if (token && localStorage.getItem("token") != "undefined" || "") {
      this.http.get(this.UserUrl)
        .subscribe(Response => {
          this.li = Response;
          this.users = this.li.users
        });
    }
  }

  load() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  onClick(user: User) {
    this.currentUserService.changeCurrentUser(user);
  }

  handlePanel(action: string) {
    this.load();
  }
}
