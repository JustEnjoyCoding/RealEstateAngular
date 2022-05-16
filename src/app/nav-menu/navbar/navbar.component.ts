import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  Loggedinuser: string;
  ngOnInit(): void {}

  loggedin() {
    this.Loggedinuser = localStorage.getItem('Token');
    return this.Loggedinuser;
  }

  onLogout() {
    localStorage.removeItem('Token');
  }


}
