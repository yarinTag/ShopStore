import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  url=environment.EditUserUrl
  status: string;
  constructor(private current:CurrentUserService, private http: HttpClient ) { }
  user=this.current.user
  ngOnInit(): void {
  }

name:String=this.user.firstName

private extractData(res: Response) {
  let body = res.json();
  return body;
}

onClick():void{
  if(this.name!==this.user.firstName){
    this.user.firstName=this.name
  }

  this.http.put(this.url+'/'+this.user._id,this.user).subscribe(() => this.status = 'Edit successful');
}



}
