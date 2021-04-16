import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {User} from 'models/user'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private UsersUrl= environment.UserUrl;


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    console.log(this.UsersUrl);
    console.log(this.http.get<User[]>(this.UsersUrl));

    return this.http.get<User[]>(this.UsersUrl);
  }

  addUser(firstName: String): Observable<User> {
    return this.http.post<User>(this.UsersUrl, { _firstName: firstName });
  }

  getUser(firstName: String): Observable<User> {
    const url = `${this.UsersUrl}/${firstName}`;
    return this.http.get<User>(url);
  }

  updateUser(User: User): Observable<User> {
    const url = `${this.UsersUrl}/${User.firstName}`;
    return this.http.patch<User>(url, { title: User.firstName });
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.UsersUrl}/${id}`;
    return this.http.delete<User>(url);
  }

  scrape(): Observable<any> {
    const url = `${this.UsersUrl}/scrape`;
    return this.http.get(url);
  }
}
