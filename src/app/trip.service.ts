import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  createTrip(tripName: string, tripImage: string, startDate: string, endDate: string, creatorId: string) {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('http://localhost:4500/api/v1/trip/',
      {
        'name': tripName,
        'url': tripImage,
        'startDate': startDate,
        'endDate': endDate,
        'creatorID': creatorId,
      }, options);
  }
}
