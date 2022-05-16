import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../HousingServices/user-auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent implements OnInit {
  constructor(private authCandidate: UserAuthService,private rout:Router) {}

  ngOnInit(): void {}

  OnLogin(loginForm: NgForm) {
    console.log(loginForm.value);

const token = this.authCandidate.authUser(loginForm.value);


if (token) {
   alert(JSON.stringify(token));
  localStorage.setItem('Token', token.userName);
  this.rout.navigate(['/'])
  console.log('login sucessful')
}
else{
  alert(JSON.stringify(token));
  console.log('login not sucessful')
}

  }
}
