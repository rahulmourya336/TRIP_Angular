import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  localSession = JSON.parse(localStorage.getItem('currentUser'));
  constructor(private router: Router) {
    // check for session
    const user = localStorage.getItem('currentUser');
    if (!user) {
      this.router.navigate(['/signin']);
    }


  }

  ngOnInit() {

  }

  logoutUser() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
