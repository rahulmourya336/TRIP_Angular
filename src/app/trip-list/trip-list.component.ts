import {Component, OnInit, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy, Input} from '@angular/core';
import {TripService} from '../trip.service';
import {Observable} from 'rxjs/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css'],
})
export class TripListComponent implements OnInit, AfterViewInit {
  tripListStatus = 0;
  tripLists;

  constructor(private Trip: TripService, private router: Router) {
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    const credentials = JSON.parse(localStorage.getItem('currentUser'));
    const creatorId_ = credentials.id;

    this.Trip.getAllTrips(creatorId_).subscribe(
      data => {
        if (data) {
          this.tripLists = data;
          console.log('Trip List', this.tripLists);
          this.tripListStatus = this.tripLists.length;
        } else {
          this.tripListStatus = 0;
          console.log('No trips found');
        }
      },
      error => {
        console.warn('Cannot Create trip:', error);
        this.tripListStatus = -1;
      });
  }



  patchTrip(tripId) {

  }
}

