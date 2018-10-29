import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  constructor(private router: Router, private Trip: TripService) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  removeTrip(tripId) {
    this.Trip.removeTrip(tripId).subscribe(
      data => {
        if (data) {
          if (Object.values(data)[0] === 500) {
            // call function display internal server error
            console.log('Internal Server Error');
          } else if (Object.values(data)[0] === 200) {
            this.router.navigate(['/dashboard']);
            // Toast success
            console.log('Trip Deleted');
          } else {
            // Unknown error
            console.log('unknown error');
          }
        }
      },
      error => {
        console.warn('Cannot Create trip:', error);
      });
  }

}
