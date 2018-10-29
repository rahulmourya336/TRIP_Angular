import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationService } from './authentication.service';
import { TripService } from './trip.service';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddTripFormComponent } from './add-trip-form/add-trip-form.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { ToastMessageComponent } from './toast-message/toast-message.component';
import { TripManagePanelComponent } from './trip-manage-panel/trip-manage-panel.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AddExpenseFormComponent } from './add-expense-form/add-expense-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ErrorPageComponent,
    DashboardComponent,
    LandingPageComponent,
    AddTripFormComponent,
    TripListComponent,
    SubHeaderComponent,
    ToastMessageComponent,
    TripManagePanelComponent,
    AddExpenseComponent,
    AddExpenseFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
