import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface User {
  _id: object;
  email: string;
  contact: number;
  name: string;
  password: string;
  status: boolean;
}

interface UserCredentials {
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  // getAllUsers(): Observable<User[]> {
  //   return this.http.get<User[]>('localhost:4500/api/v1/auth/');
  // }

  signinUser(username: string, password: string) {
    this.http.post('http://localhost:4500/api/v1/auth/signin',
      {
        'email': username,
        'password': password
      })
      .subscribe(
        data => {
          console.log(data);
          return(data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }

  getAllTrips() {
    return this.http.get('http://localhost:4500/api/v1/trip');
  }

}
