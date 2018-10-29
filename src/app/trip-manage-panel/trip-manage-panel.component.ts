import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-manage-panel',
  templateUrl: './trip-manage-panel.component.html',
  styleUrls: ['./trip-manage-panel.component.css']
})
export class TripManagePanelComponent implements OnInit {
  tripId: string;
  tripName: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private Trip:  TripService) { }

  ngOnInit() {
    // Check for query params on the URL
    if (!!(this.activatedRoute.snapshot.queryParams['id'] && this.activatedRoute.snapshot.queryParams['name'])) {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.tripId = this.activatedRoute.snapshot.queryParams['id'];
        this.tripName = this.activatedRoute.snapshot.queryParams['name'];
        console.log('Trip Params: ', this.tripId, this.tripName);
      });
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
