import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-manage-panel',
  templateUrl: './trip-manage-panel.component.html',
  styleUrls: ['./trip-manage-panel.component.css']
})
export class TripManagePanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
