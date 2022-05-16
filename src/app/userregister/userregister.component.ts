import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { UserServiceService } from '../HousingServices/user-service.service';
import { UserForRegister } from '../Model/user-for-register';


@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css'],
})
export class UserregisterComponent implements OnInit {
  constructor(
    private Rfb: FormBuilder,
    private UserService: UserServiceService
  ) {}

  RegistrationForm: FormGroup;
  userSubmitted: boolean;
  User: UserForRegister;

  ngOnInit(): void {
    // this.RegistrationForm = new FormGroup(
    //   {
    //     userName: new FormControl(null, Validators.required),
    //     emailID: new FormControl(null, [Validators.required, Validators.email]),
    //     Password: new FormControl(null, [
    //       Validators.required,
    //       Validators.minLength(8),
    //     ]),
    //     ConfirmPassword: new FormControl(null, [Validators.required]),
    //     Mobile: new FormControl(null, [
    //       Validators.required,
    //       Validators.minLength(10),
    //     ]),
    //   },
    //    this.PasswordMatchValidotors

    // );
    this.CreateRegistrationForm();
  }

  CreateRegistrationForm() {
    this.RegistrationForm = this.Rfb.group(
      {
        userName: [null, [Validators.required]],
        emailID: [null, [Validators.required, Validators.email]],
        Password: [null, [Validators.required, Validators.minLength(8)]],
        ConfirmPassword: [null, [Validators.required]],
        Mobile: [null, [Validators.required, Validators.minLength(10)]],
      },
      { validators: this.PasswordMatchValidotors }
    );
  }

  PasswordMatchValidotors(fg: FormGroup): Validators {
    return fg.get('Password').value === fg.get('ConfirmPassword').value
      ? null
      : { notmatched: true };
  }

  OnSubmit() {
    // alert('This is form submitted');
    // console.log(this.RegistrationForm);
    this.userSubmitted = true;

    if (this.RegistrationForm.valid) {
      //this.User = Object.assign(this.User, this.RegistrationForm.value);
      // localStorage.setItem('Users', JSON.stringify(this.User));
      this.UserService.addUsers(this.userData());
      this.RegistrationForm.reset();
      //this.userSubmitted = false;
    }
  }

  userData(): UserForRegister {
    return (this.User = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    });
  }

  // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get userName() {
    return this.RegistrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.RegistrationForm.get('emailID') as FormControl;
  }
  get password() {
    return this.RegistrationForm.get('Password') as FormControl;
  }
  get confirmPassword() {
    return this.RegistrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.RegistrationForm.get('Mobile') as FormControl;
  }
  // ------------------------
}
