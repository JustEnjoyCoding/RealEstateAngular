import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css'],
})
export class UserregisterComponent implements OnInit {
  constructor() {}

  RegistrationForm: FormGroup;

  ngOnInit(): void {
    this.RegistrationForm = new FormGroup(
      {
        userName: new FormControl(null, Validators.required),
        emailID: new FormControl(null, [Validators.required, Validators.email]),
        Password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        ConfirmPassword: new FormControl(null, [Validators.required]),
        Mobile: new FormControl(null, [
          Validators.required,
          Validators.minLength(10),
        ]),
      },
       this.PasswordMatchValidotors 
      // { validators: this.PasswordMatchValidotors }
    );
  }

  PasswordMatchValidotors(fg: FormGroup): Validators {

    return fg.get('Password').value === fg.get('ConfirmPassword').value
      ? null
      : { notmatched: true };
  }

  OnSubmit() {
    alert('This is form submitted');
    console.log(this.RegistrationForm);
  }
}
