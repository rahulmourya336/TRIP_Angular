import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-trip-form',
  templateUrl: './add-trip-form.component.html',
  styleUrls: ['./add-trip-form.component.css']
})
export class AddTripFormComponent implements OnInit {
  tripForm: FormGroup;
  submitted = false;
  defaultThumbnail = 'https://img.freepik.com/free-vector/travel-background-with-van-on-earth_23-2147774015.jpg?size=338&ext=jpg';

  constructor(private fb: FormBuilder, private router: Router, private location: Location) {
    // check for session
    const user = localStorage.getItem('currentUser');
    if (!user) {
      this.router.navigate(['/signin']);
    }

    //  Init Form
    this.tripForm = this.fb.group({
      tripName: ['', Validators.required],
      tripImage: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    });
  }

  get f() { return this.tripForm.controls; }

  ngOnInit() {

  }

  goBack() {
    this.location.back();

  }

  linkStatus(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        callback(xhr.status === 200);
      }
    };
    xhr.open('HEAD', url);
    xhr.send();
  }

  validateUrl(url) {
    const expression = '/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi';
    const regex = new RegExp(expression);
    return(console.log(url.match(regex)));
  }

  VerifiedUrl(url) {
    this.linkStatus(url, (exists) => {
      console.log('exists status', exists);
    });
   // return result;
   // Can't get the result due to callback function - ERROR
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.tripForm.invalid) {
      return;
    }
    const tripName_ = this.tripForm.value.tripName;
    let tripImage_ = this.tripForm.value.tripImage;
    const result = this.VerifiedUrl(tripImage_);
     if (!this.linkStatus(tripImage_, (exists) => {})) {
       console.log('Must be false.');
       tripImage_ = this.defaultThumbnail;
     }

    const startDate_ = this.tripForm.value.startDate;
    const endDate_ = this.tripForm.value.endDate;

    console.log(tripImage_, tripName_, startDate_ , endDate_);
  }
}
