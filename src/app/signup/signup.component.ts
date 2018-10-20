import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, {
      validator: this.MatchPassword
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }
  form: FormGroup;
  submitted = false;

  MatchPassword(AC: AbstractControl) {
    const password = AC.get('password').value;
    const confirmPassword = AC.get('confirmPassword').value;
    if (password !== confirmPassword) {
      console.log('false');
      AC.get('confirmPassword').setErrors( {MatchPassword: true} );
    } else {
      console.log('true');
      return null;
    }
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    const name_ = this.form.value.name;
    const email_ = this.form.value.email;
    const password_ = this.form.value.password;
    const contact_ = this.form.value.contact;

    this.auth.signupUser(name_, email_, password_, contact_).subscribe(
      data => {
        console.log(data);
        if (Object.keys(data).length > 0) {
          this.router.navigate(['/signin']);
        } else {
          this.router.navigate(['/userNamePasswordInvalid']);
        }
      },
      error => {
        console.warn('Signup Error:', error);
      });
  }

  ngOnInit() {
  }

}
