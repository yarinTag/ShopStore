import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'models/user';

@Pipe({
  name: 'Usersearchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(users: User[], searchValue: string): User[] {
 
    if(!users || !searchValue){
        return users;
    }
    return users.filter(user=> contains(user,searchValue));

    function contains(actual: User, expected:string) {
      if (actual.firstName.toLocaleLowerCase().indexOf(expected) >= 0 || actual.email.toLocaleLowerCase().indexOf(expected) >= 0 || actual.role.toLocaleLowerCase().indexOf(expected) >= 0) {
        return actual;
      }
    }
  }

}
