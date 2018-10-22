import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from '../app/signin/signin.component';
import { SignupComponent } from '../app/signup/signup.component';
import { ErrorPageComponent } from '../app/error-page/error-page.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { LandingPageComponent } from '../app/landing-page/landing-page.component';
import { AddTripFormComponent } from '../app/add-trip-form/add-trip-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/landingPage', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'trip', component: AddTripFormComponent },

  {path: '**', component: ErrorPageComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
