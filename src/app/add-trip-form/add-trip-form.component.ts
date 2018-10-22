import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-trip-form',
  templateUrl: './add-trip-form.component.html',
  styleUrls: ['./add-trip-form.component.css']
})
export class AddTripFormComponent implements OnInit {
  tripFrom: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    // check for session
    const user = localStorage.getItem('currentUser');
    if (!user) {
      this.router.navigate(['/signin']);
    }
  }

  ngOnInit() {
  }

}
