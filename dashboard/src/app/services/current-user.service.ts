import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  static changeCurrentOrder(user: User) {
    throw new Error('Method not implemented.');
  }

  private source = new BehaviorSubject(null);
  currentUser = this.source.asObservable();
  user:User

  constructor() {}

  changeCurrentUser(user: User) {
    this.source.next(user);
    this.user=user
  }

  
  getCurrentUser():User{
    return this.user
  }
}
