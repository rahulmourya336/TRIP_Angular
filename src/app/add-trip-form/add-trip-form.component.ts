import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {TripService} from '../trip.service';

@Component({
  selector: 'app-add-trip-form',
  templateUrl: './add-trip-form.component.html',
  styleUrls: ['./add-trip-form.component.css']
})
export class AddTripFormComponent implements OnInit {
  tripForm: FormGroup;
  submitted = false;
  tripStatus = 0;
  defaultThumbnail = 'https://img.freepik.com/free-vector/travel-background-with-van-on-earth_23-2147774015.jpg?size=338&ext=jpg';

  constructor(private fb: FormBuilder, private router: Router, private location: Location, private Trip: TripService) {
    // check for session
    const user = localStorage.getItem('currentUser');
    if (!user) {
      this.router.navigate(['/signin']);
    }

    //  Init Form
    this.tripForm = this.fb.group({
      tripName: ['', Validators.required],
      tripImage: [''],
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
    // let tripImage_ = this.tripForm.value.tripImage;
    // const result = this.VerifiedUrl(tripImage_);
    //  if (!this.linkStatus(tripImage_, (exists) => {})) {
    //    console.log('Must be false.');
    //    tripImage_ = this.defaultThumbnail;
    //  }
    const tripImage_ = this.defaultThumbnail;

    const startDate_ = this.tripForm.value.startDate;
    const endDate_ = this.tripForm.value.endDate;
    // Get current user ID
    const credentials = JSON.parse(localStorage.getItem('currentUser'));
    const creatorId_ = credentials.id;

    console.log(tripImage_, tripName_, startDate_ , endDate_);

    this.Trip.createTrip(tripName_, tripImage_, startDate_, endDate_, creatorId_).subscribe(
      data => {
        console.log(Object.values(data) );
        // const data_ = JSON.stringify(data);
        if (data) {
          if (Object.values(data)[0] === 400) {
            this.tripStatus = 1;
            this.tripForm.invalid;
          } else if (Object.values(data)[0] === 201) {
            this.router.navigate(['/dashboard']);
          } else {
            this.tripStatus = -1;
            this.tripForm.invalid;
          }
        }
      },
      error => {
        console.warn('Cannot Create trip:', error);
      });

  }
}
