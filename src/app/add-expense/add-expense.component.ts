import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {TripService} from '../trip.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private Trip: TripService, private router: Router) {
    this.form = this.fb.group({
      category: ['', Validators.required],
      name: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
  }

  onSubmit() {

  }

}
