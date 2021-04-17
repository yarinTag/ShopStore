import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { local } from 'd3-selection';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  url = environment.AddUsersUrl;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    let token = this.route.snapshot.queryParams["token"]
    //  console.log(param1)
    console.log(token)
    if (token)
      localStorage.setItem("token", token)
  }

  onClick(): void {
    localStorage.setItem("token", "")
    alert("Disconnected Successfully")
  }

  isAuth() {
    let token = localStorage.getItem("token")
    if (token && localStorage.getItem("token") != "undefined" || "")
      return true;
    return false;
  }
}
