import { Injectable } from '@angular/core';
import { UserForRegister } from '../Model/user-for-register';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor() {}

  addUsers(User: UserForRegister) {
    let users = [];

    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
      users = [...users, User];
    } else {
      users = [User];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
