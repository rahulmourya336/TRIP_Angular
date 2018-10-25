import { Component, OnInit } from '@angular/core';
import {TripService} from '../trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  tripListStatus = 0;
  tripList = {};

  constructor(private Trip: TripService) { }

  ngOnInit(){

}
  ngAfterViewInit() {
    const credentials = JSON.parse(localStorage.getItem('currentUser'));
    const creatorId_ = credentials.id;

    this.Trip.getAllTrips(creatorId_).subscribe(
      data => {
        console.log(Object.values(data) );
        // const data_ = JSON.stringify(data);
        if (data) {
          if (Object.values(data)[0] === 400) {
            this.tripListStatus = 1;
          } else if (Object.values(data)[0] === 201) {
            this.tripList = data;
            console.log('Trip List', data);
          } else {
            this.tripListStatus = -1;
          }
        }
      },
      error => {
        console.warn('Cannot Create trip:', error);
      });
  }

}
