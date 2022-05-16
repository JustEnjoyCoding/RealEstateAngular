import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }


authUser(user:any){
  let UserArray = [];
  //alert(JSON.stringify(user));
  if (localStorage.getItem('Users')) {
    UserArray = JSON.parse(localStorage.getItem('Users'));
    //alert(JSON.stringify(UserArray));
  }
  return UserArray.find(
    p => p.userName === user.userName && p.password === user.password
  );
}



}
