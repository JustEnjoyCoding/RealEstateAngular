import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css'],
})
export class AddpropertyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  OnSubmit(FormsData:NgForm) {
    // alert('Hello This is david');

    console.log(FormsData);
  }
}
