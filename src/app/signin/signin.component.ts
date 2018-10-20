import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [ AuthenticationService ]
})


export class SigninComponent implements OnInit {
  form: FormGroup;

  username = new FormControl('', Validators.required);
  password = new FormControl ('', Validators.required);

  constructor(fb: FormBuilder, private auth: AuthenticationService) {
    this.form = fb.group({
      'username': this.username,
      'password': this.password
    });
  }

  onSubmit() {
    console.log('Signin from submitted');
    console.log(this.form);
    const username_ = this.form.value.username;
    const password_ = this.form.value.password;
    this.auth.signinUser(username_, password_).subscribe((data) => {
      console.log(data);
      if (data.length === 0){
        console.log('No user found');
      }
    });
  }

  ngOnInit() {
  }

  // newUser() {
  //   this.model = new Users('', '');
  // }

}
