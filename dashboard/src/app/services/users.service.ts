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
    return this.http.get<User[]>(this.UsersUrl);
  }

  addUser(id: number): Observable<User> {
    return this.http.post<User>(this.UsersUrl, { id: id });
  }

  getUser(id: number): Observable<User> {
    const url = `${this.UsersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  updateUser(User: User): Observable<User> {
    const url = `${this.UsersUrl}/${User._id}`;
    return this.http.patch<User>(url, { title: User._id });
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
