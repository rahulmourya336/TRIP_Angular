import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthenticationService]
})


export class SigninComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  verifiedUser = false;


  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    const username_ = this.form.value.email;
    const password_ = this.form.value.pwd;

    this.auth.signinUser(username_, password_).subscribe(
      data => {
        console.log(data);
        if (Object.keys(data).length > 0) {
          this.router.navigate(['/dashboard']);
        } else {
          this.verifiedUser = true;
          this.form.invalid;
        }
      },
      error => {
        console.warn('Error:', error);
      });
  }
}
