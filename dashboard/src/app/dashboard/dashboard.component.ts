import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  url= environment.AddUsersUrl;
  constructor(private http : HttpClient){}


    onClick():void {
      this.http.get(this.url);
      console.log("more users added");
    }
}
