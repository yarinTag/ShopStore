import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private source = new BehaviorSubject(null);
  currentUser = this.source.asObservable();

  constructor() { }

  changeCurrentUser(User: User) {
    this.source.next(User);
  }
}
